// Mapear ID de peça para seu objeto
const pecasMap = {};

// Dados de peças organizados por tipo
const pecasPorTipo = {
    cpu: [],
    mobo: [],
    gpu: [],
    ram: [],
    psu: [],
    case: []
};

// Preencher os dropdowns com as peças do banco
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔍 Inicializando página de compatibilidade...');
    
    // Filtra e popula datalists
    populateData('cpu', pecas.filter(p => p.tipo === 'cpu'));
    populateData('mobo', pecas.filter(p => p.tipo === 'mobo'));
    populateData('gpu', pecas.filter(p => p.tipo === 'gpu'));
    populateData('ram', pecas.filter(p => p.tipo === 'ram'));
    populateData('psu', pecas.filter(p => p.tipo === 'psu'));
    populateData('case', pecas.filter(p => p.tipo === 'case'));

    console.log('✅ Dados populados');
    console.log('📊 Total de itens no mapa de peças:', Object.keys(pecasMap).length);

    // Vincular inputs com autocomplete
    setupAutocomplete('cpu', 'cpu-search', 'cpu-suggestions');
    setupAutocomplete('mobo', 'mobo-search', 'mobo-suggestions');
    setupAutocomplete('gpu', 'gpu-search', 'gpu-suggestions');
    setupAutocomplete('ram', 'ram-search', 'ram-suggestions');
    setupAutocomplete('psu', 'psu-search', 'psu-suggestions');
    setupAutocomplete('case', 'case-search', 'case-suggestions');

    console.log('✅ Autocomplete configurado');

    // Menu lateral
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const close = document.getElementById('close-sidebar');

    toggle.addEventListener('click', () => sidebar.classList.add('active'));
    close.addEventListener('click', () => sidebar.classList.remove('active'));

    // Verificar compatibilidade
    document.getElementById('check-btn').addEventListener('click', verificarCompatibilidade);
});

function populateData(tipo, items) {
    pecasPorTipo[tipo] = items;
    items.forEach(item => {
        pecasMap[item.nome] = { id: item.id, tipo: tipo, ...item };
    });
}

function setupAutocomplete(hiddenId, searchInputId, suggestionsId) {
    const searchInput = document.getElementById(searchInputId);
    const hiddenField = document.getElementById(hiddenId);
    const suggestionsDiv = document.getElementById(suggestionsId);

    searchInput.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase().trim();
        
        if (searchValue.length === 0) {
            suggestionsDiv.classList.remove('active');
            return;
        }

        // Filtrar sugestões
        const matches = pecasPorTipo[hiddenId].filter(item =>
            item.nome.toLowerCase().includes(searchValue)
        );

        if (matches.length === 0) {
            suggestionsDiv.classList.remove('active');
            return;
        }

        // Mostrar sugestões (máximo 8)
        suggestionsDiv.innerHTML = '';
        matches.slice(0, 8).forEach(item => {
            const div = document.createElement('div');
            div.className = 'suggestion-item';
            div.textContent = item.nome;
            div.addEventListener('click', () => {
                searchInput.value = item.nome;
                hiddenField.value = item.id;
                suggestionsDiv.classList.remove('active');
            });
            suggestionsDiv.appendChild(div);
        });

        suggestionsDiv.classList.add('active');
    });

    // Fechar sugestões ao sair do foco
    searchInput.addEventListener('blur', () => {
        setTimeout(() => {
            suggestionsDiv.classList.remove('active');
        }, 200);
    });

    // Fechar sugestões ao clicar em outro lugar
    document.addEventListener('click', (e) => {
        if (e.target !== searchInput && e.target !== suggestionsDiv && !suggestionsDiv.contains(e.target)) {
            suggestionsDiv.classList.remove('active');
        }
    });
}

function verificarCompatibilidade() {
    const cpuId = document.getElementById('cpu').value;
    const moboId = document.getElementById('mobo').value;
    const gpuId = document.getElementById('gpu').value;
    const ramId = document.getElementById('ram').value;
    const psuId = document.getElementById('psu').value;
    const caseId = document.getElementById('case').value;

    if (!cpuId || !moboId || !gpuId || !ramId || !psuId || !caseId) {
        alert('Por favor, selecione todas as peças.');
        return;
    }

    const cpu = pecas.find(p => p.id == cpuId);
    const mobo = pecas.find(p => p.id == moboId);
    const gpu = pecas.find(p => p.id == gpuId);
    const ram = pecas.find(p => p.id == ramId);
    const psu = pecas.find(p => p.id == psuId);
    const caseItem = pecas.find(p => p.id == caseId);

    let messages = [];
    let compatível = true;

    // Soquete
    if (cpu.soquete !== mobo.soquete) {
        messages.push(`❌ Soquete incompatível: a CPU usa ${cpu.soquete}, mas a placa-mãe é ${mobo.soquete}.`);
        compatível = false;
    } else {
        messages.push(`✅ Soquete compatível (${cpu.soquete}).`);
    }

    // Geração da CPU e chipset (simplificado)
    if (mobo.chipset && cpu.geracao) {
        if (!cpu.chipsetsCompativeis.includes(mobo.chipset)) {
            messages.push(`❌ O chipset ${mobo.chipset} pode não suportar essa geração de CPU sem atualização de BIOS. Verifique.`);
            compatível = false;
        } else {
            messages.push(`✅ Chipset ${mobo.chipset} compatível com a CPU.`);
        }
    }

   // RAM (usa 'tipoRam')
if (cpu.tipoRam !== ram.tipoRam || mobo.tipoRam !== ram.tipoRam) {
    messages.push(`❌ Tipo de RAM incompatível: requer ${cpu.tipoRam}, mas a memória selecionada é ${ram.tipoRam}.`);
    compatível = false;
} else {
    messages.push(`✅ Tipo de RAM compatível (${ram.tipoRam}).`);
}

    // Fonte (TDP total com folga de 20%)
    const tdpTotal = cpu.tdp + gpu.tdp + 150; // margem para outros componentes
    const psuNeeded = Math.ceil(tdpTotal * 1.2);
    if (psu.potencia < psuNeeded) {
        messages.push(`❌ Fonte insuficiente: necessário ~${psuNeeded}W (recomendado ${psuNeeded}W), mas a fonte escolhida é de ${psu.potencia}W.`);
        compatível = false;
    } else {
        messages.push(`✅ Fonte de ${psu.potencia}W suficiente (consumo estimado ${psuNeeded}W).`);
    }

    // Gabinete x placa-mãe (formato)
    const formatos = {
        'ATX': ['ATX', 'E-ATX'],
        'Micro-ATX': ['Micro-ATX', 'ATX'],
        'Mini-ITX': ['Mini-ITX', 'Micro-ATX', 'ATX']
    };
    if (caseItem.suportaFormato && mobo.formato) {
        if (caseItem.suportaFormato.includes(mobo.formato)) {
            messages.push(`✅ Gabinete suporta placas-mãe ${mobo.formato}.`);
        } else {
            messages.push(`❌ O gabinete não suporta placas-mãe ${mobo.formato}.`);
            compatível = false;
        }
    } else {
        messages.push(`⚠️ Verifique manualmente se o gabinete suporta o formato da placa-mãe.`);
    }

    const resultBox = document.getElementById('result');
    resultBox.innerHTML = messages.join('\n');
    resultBox.style.borderLeft = compatível ? '4px solid #22c55e' : '4px solid #ef4444';
}