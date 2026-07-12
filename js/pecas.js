const pecas = [
    // CPUs (soquete, TDP, geração, tipo de RAM, chipsets compatíveis)
    // ================= CPUs AMD AM4 =================
{ id: 6, tipo: "cpu", nome: "AMD Ryzen 3 3200G", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["A320", "B350", "B450", "X470"] },
{ id: 7, tipo: "cpu", nome: "AMD Ryzen 3 3300X", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["A320", "B450", "B550", "X470", "X570"] },
{ id: 8, tipo: "cpu", nome: "AMD Ryzen 5 3400G", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["A320", "B450", "X470"] },
{ id: 9, tipo: "cpu", nome: "AMD Ryzen 5 3500", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 10, tipo: "cpu", nome: "AMD Ryzen 5 3500X", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },

{ id: 11, tipo: "cpu", nome: "AMD Ryzen 5 3600", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 12, tipo: "cpu", nome: "AMD Ryzen 5 3600X", soquete: "AM4", tdp: 95, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 13, tipo: "cpu", nome: "AMD Ryzen 7 3700X", soquete: "AM4", tdp: 65, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 14, tipo: "cpu", nome: "AMD Ryzen 7 3800X", soquete: "AM4", tdp: 105, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 15, tipo: "cpu", nome: "AMD Ryzen 9 3900X", soquete: "AM4", tdp: 105, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["X470", "X570"] },

{ id: 16, tipo: "cpu", nome: "AMD Ryzen 9 3950X", soquete: "AM4", tdp: 105, geracao: 3000, tipoRam: "DDR4", chipsetsCompativeis: ["X470", "X570"] },
{ id: 17, tipo: "cpu", nome: "AMD Ryzen 3 4100", soquete: "AM4", tdp: 65, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B450", "B550"] },
{ id: 18, tipo: "cpu", nome: "AMD Ryzen 5 4500", soquete: "AM4", tdp: 65, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B450", "B550"] },
{ id: 19, tipo: "cpu", nome: "AMD Ryzen 5 4600G", soquete: "AM4", tdp: 65, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550"] },
{ id: 20, tipo: "cpu", nome: "AMD Ryzen 5 4650G PRO", soquete: "AM4", tdp: 65, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550"] },

{ id: 21, tipo: "cpu", nome: "AMD Ryzen 7 4700G", soquete: "AM4", tdp: 65, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550"] },
{ id: 22, tipo: "cpu", nome: "AMD Ryzen 7 4750G PRO", soquete: "AM4", tdp: 65, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550"] },
{ id: 23, tipo: "cpu", nome: "AMD Ryzen 7 4800H", soquete: "FP6", tdp: 45, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: [] },
{ id: 24, tipo: "cpu", nome: "AMD Ryzen 9 4900H", soquete: "FP6", tdp: 45, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: [] },
{ id: 25, tipo: "cpu", nome: "AMD Ryzen 9 4900HS", soquete: "FP6", tdp: 35, geracao: 4000, tipoRam: "DDR4", chipsetsCompativeis: [] },

{ id: 26, tipo: "cpu", nome: "AMD Ryzen 3 5300G", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550"] },
{ id: 27, tipo: "cpu", nome: "AMD Ryzen 5 5500", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B450", "B550", "X570"] },
{ id: 28, tipo: "cpu", nome: "AMD Ryzen 5 5600G", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550", "X570"] },
{ id: 29, tipo: "cpu", nome: "AMD Ryzen 5 5600X", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B450", "B550", "X570"] },
{ id: 30, tipo: "cpu", nome: "AMD Ryzen 7 5700G", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["A520", "B550", "X570"] },

{ id: 31, tipo: "cpu", nome: "AMD Ryzen 7 5700X", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 32, tipo: "cpu", nome: "AMD Ryzen 7 5800X", soquete: "AM4", tdp: 105, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["B450", "B550", "X570"] },
{ id: 33, tipo: "cpu", nome: "AMD Ryzen 7 5800X3D", soquete: "AM4", tdp: 105, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["B550", "X570"] },
{ id: 34, tipo: "cpu", nome: "AMD Ryzen 9 5900", soquete: "AM4", tdp: 65, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["B550", "X570"] },
{ id: 35, tipo: "cpu", nome: "AMD Ryzen 9 5900X", soquete: "AM4", tdp: 105, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["B550", "X570"] },

{ id: 36, tipo: "cpu", nome: "AMD Ryzen 9 5950X", soquete: "AM4", tdp: 105, geracao: 5000, tipoRam: "DDR4", chipsetsCompativeis: ["B550", "X570"] },

// ================= CPUs AMD AM5 =================
{ id: 37, tipo: "cpu", nome: "AMD Ryzen 5 7500F", soquete: "AM5", tdp: 65, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["A620", "B650", "X670"] },
{ id: 38, tipo: "cpu", nome: "AMD Ryzen 5 7600", soquete: "AM5", tdp: 65, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["A620", "B650", "X670"] },
{ id: 39, tipo: "cpu", nome: "AMD Ryzen 5 7600X", soquete: "AM5", tdp: 105, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670"] },
{ id: 40, tipo: "cpu", nome: "AMD Ryzen 7 7700", soquete: "AM5", tdp: 65, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670"] },

{ id: 41, tipo: "cpu", nome: "AMD Ryzen 7 7700X", soquete: "AM5", tdp: 105, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670"] },
{ id: 42, tipo: "cpu", nome: "AMD Ryzen 7 7800X3D", soquete: "AM5", tdp: 120, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670"] },
{ id: 43, tipo: "cpu", nome: "AMD Ryzen 9 7900", soquete: "AM5", tdp: 65, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670"] },
{ id: 44, tipo: "cpu", nome: "AMD Ryzen 9 7900X", soquete: "AM5", tdp: 170, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["X670"] },
{ id: 45, tipo: "cpu", nome: "AMD Ryzen 9 7950X", soquete: "AM5", tdp: 170, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["X670"] },

{ id: 46, tipo: "cpu", nome: "AMD Ryzen 9 7950X3D", soquete: "AM5", tdp: 120, geracao: 7000, tipoRam: "DDR5", chipsetsCompativeis: ["X670"] },
{ id: 47, tipo: "cpu", nome: "AMD Ryzen 5 8600G", soquete: "AM5", tdp: 65, geracao: 8000, tipoRam: "DDR5", chipsetsCompativeis: ["A620", "B650", "X670"] },
{ id: 48, tipo: "cpu", nome: "AMD Ryzen 7 8700G", soquete: "AM5", tdp: 65, geracao: 8000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670"] },
{ id: 49, tipo: "cpu", nome: "AMD Ryzen 7 9700X", soquete: "AM5", tdp: 65, geracao: 9000, tipoRam: "DDR5", chipsetsCompativeis: ["B650", "X670", "X870"] },
{ id: 50, tipo: "cpu", nome: "AMD Ryzen 9 9900X", soquete: "AM5", tdp: 120, geracao: 9000, tipoRam: "DDR5", chipsetsCompativeis: ["X670", "X870"] },

{ id: 51, tipo: "cpu", nome: "AMD Ryzen 9 9950X", soquete: "AM5", tdp: 170, geracao: 9000, tipoRam: "DDR5", chipsetsCompativeis: ["X670", "X870"] },
{ id: 52, tipo: "cpu", nome: "AMD Ryzen 7 9800X3D", soquete: "AM5", tdp: 120, geracao: 9000, tipoRam: "DDR5", chipsetsCompativeis: ["X670", "X870"] },
{ id: 53, tipo: "cpu", nome: "AMD Ryzen 9 9900X3D", soquete: "AM5", tdp: 120, geracao: 9000, tipoRam: "DDR5", chipsetsCompativeis: ["X670", "X870"] },
{ id: 54, tipo: "cpu", nome: "AMD Ryzen 9 9950X3D", soquete: "AM5", tdp: 170, geracao: 9000, tipoRam: "DDR5", chipsetsCompativeis: ["X670", "X870"] },

// ================= CPUs Intel LGA1150 / LGA1151 / LGA1200 / LGA1700 =================
{ id: 55, tipo: "cpu", nome: "Intel Core i3-4170", soquete: "LGA1150", tdp: 54, geracao: 4, tipoRam: "DDR3", chipsetsCompativeis: ["H81", "B85", "H97", "Z97"] },
{ id: 56, tipo: "cpu", nome: "Intel Core i5-4460", soquete: "LGA1150", tdp: 84, geracao: 4, tipoRam: "DDR3", chipsetsCompativeis: ["B85", "H97", "Z97"] },
{ id: 57, tipo: "cpu", nome: "Intel Core i7-4790K", soquete: "LGA1150", tdp: 88, geracao: 4, tipoRam: "DDR3", chipsetsCompativeis: ["Z97"] },

{ id: 58, tipo: "cpu", nome: "Intel Core i3-6100", soquete: "LGA1151", tdp: 51, geracao: 6, tipoRam: "DDR4", chipsetsCompativeis: ["H110", "B150", "H170", "Z170"] },
{ id: 59, tipo: "cpu", nome: "Intel Core i5-6400", soquete: "LGA1151", tdp: 65, geracao: 6, tipoRam: "DDR4", chipsetsCompativeis: ["B150", "H170", "Z170"] },
{ id: 60, tipo: "cpu", nome: "Intel Core i5-6600K", soquete: "LGA1151", tdp: 91, geracao: 6, tipoRam: "DDR4", chipsetsCompativeis: ["Z170"] },
{ id: 61, tipo: "cpu", nome: "Intel Core i7-6700", soquete: "LGA1151", tdp: 65, geracao: 6, tipoRam: "DDR4", chipsetsCompativeis: ["H170", "Z170"] },
{ id: 62, tipo: "cpu", nome: "Intel Core i7-6700K", soquete: "LGA1151", tdp: 91, geracao: 6, tipoRam: "DDR4", chipsetsCompativeis: ["Z170"] },

{ id: 63, tipo: "cpu", nome: "Intel Core i3-7100", soquete: "LGA1151", tdp: 51, geracao: 7, tipoRam: "DDR4", chipsetsCompativeis: ["H110", "B250", "Z270"] },
{ id: 64, tipo: "cpu", nome: "Intel Core i5-7400", soquete: "LGA1151", tdp: 65, geracao: 7, tipoRam: "DDR4", chipsetsCompativeis: ["B250", "Z270"] },
{ id: 65, tipo: "cpu", nome: "Intel Core i5-7600K", soquete: "LGA1151", tdp: 91, geracao: 7, tipoRam: "DDR4", chipsetsCompativeis: ["Z270"] },
{ id: 66, tipo: "cpu", nome: "Intel Core i7-7700", soquete: "LGA1151", tdp: 65, geracao: 7, tipoRam: "DDR4", chipsetsCompativeis: ["B250", "Z270"] },
{ id: 67, tipo: "cpu", nome: "Intel Core i7-7700K", soquete: "LGA1151", tdp: 91, geracao: 7, tipoRam: "DDR4", chipsetsCompativeis: ["Z270"] },

{ id: 68, tipo: "cpu", nome: "Intel Core i3-8100", soquete: "LGA1151", tdp: 65, geracao: 8, tipoRam: "DDR4", chipsetsCompativeis: ["H310", "B360", "Z370"] },
{ id: 69, tipo: "cpu", nome: "Intel Core i5-8400", soquete: "LGA1151", tdp: 65, geracao: 8, tipoRam: "DDR4", chipsetsCompativeis: ["B360", "Z370"] },
{ id: 70, tipo: "cpu", nome: "Intel Core i5-8600K", soquete: "LGA1151", tdp: 95, geracao: 8, tipoRam: "DDR4", chipsetsCompativeis: ["Z370", "Z390"] },
{ id: 71, tipo: "cpu", nome: "Intel Core i7-8700", soquete: "LGA1151", tdp: 65, geracao: 8, tipoRam: "DDR4", chipsetsCompativeis: ["B360", "Z370"] },
{ id: 72, tipo: "cpu", nome: "Intel Core i7-8700K", soquete: "LGA1151", tdp: 95, geracao: 8, tipoRam: "DDR4", chipsetsCompativeis: ["Z370", "Z390"] },

{ id: 73, tipo: "cpu", nome: "Intel Core i9-9900K", soquete: "LGA1151", tdp: 95, geracao: 9, tipoRam: "DDR4", chipsetsCompativeis: ["Z390"] },
{ id: 74, tipo: "cpu", nome: "Intel Core i5-9400F", soquete: "LGA1151", tdp: 65, geracao: 9, tipoRam: "DDR4", chipsetsCompativeis: ["B365", "Z390"] },
{ id: 75, tipo: "cpu", nome: "Intel Core i5-9600K", soquete: "LGA1151", tdp: 95, geracao: 9, tipoRam: "DDR4", chipsetsCompativeis: ["Z390"] },
{ id: 76, tipo: "cpu", nome: "Intel Core i7-9700K", soquete: "LGA1151", tdp: 95, geracao: 9, tipoRam: "DDR4", chipsetsCompativeis: ["Z390"] },

{ id: 77, tipo: "cpu", nome: "Intel Core i3-10100F", soquete: "LGA1200", tdp: 65, geracao: 10, tipoRam: "DDR4", chipsetsCompativeis: ["H410", "B460", "Z490"] },
{ id: 78, tipo: "cpu", nome: "Intel Core i5-10400F", soquete: "LGA1200", tdp: 65, geracao: 10, tipoRam: "DDR4", chipsetsCompativeis: ["B460", "Z490"] },
{ id: 79, tipo: "cpu", nome: "Intel Core i5-10600K", soquete: "LGA1200", tdp: 125, geracao: 10, tipoRam: "DDR4", chipsetsCompativeis: ["Z490"] },
{ id: 80, tipo: "cpu", nome: "Intel Core i7-10700K", soquete: "LGA1200", tdp: 125, geracao: 10, tipoRam: "DDR4", chipsetsCompativeis: ["Z490"] },
{ id: 81, tipo: "cpu", nome: "Intel Core i9-10900K", soquete: "LGA1200", tdp: 125, geracao: 10, tipoRam: "DDR4", chipsetsCompativeis: ["Z490"] },

{ id: 82, tipo: "cpu", nome: "Intel Core i3-11100F", soquete: "LGA1200", tdp: 65, geracao: 11, tipoRam: "DDR4", chipsetsCompativeis: ["H510", "B560", "Z590"] },
{ id: 83, tipo: "cpu", nome: "Intel Core i5-11400F", soquete: "LGA1200", tdp: 65, geracao: 11, tipoRam: "DDR4", chipsetsCompativeis: ["B560", "Z590"] },
{ id: 84, tipo: "cpu", nome: "Intel Core i5-11600K", soquete: "LGA1200", tdp: 125, geracao: 11, tipoRam: "DDR4", chipsetsCompativeis: ["Z590"] },
{ id: 85, tipo: "cpu", nome: "Intel Core i7-11700K", soquete: "LGA1200", tdp: 125, geracao: 11, tipoRam: "DDR4", chipsetsCompativeis: ["Z590"] },
{ id: 86, tipo: "cpu", nome: "Intel Core i9-11900K", soquete: "LGA1200", tdp: 125, geracao: 11, tipoRam: "DDR4", chipsetsCompativeis: ["Z590"] },

{ id: 87, tipo: "cpu", nome: "Intel Core i3-12100F", soquete: "LGA1700", tdp: 58, geracao: 12, tipoRam: "DDR4", chipsetsCompativeis: ["H610", "B660", "Z690"] },
{ id: 88, tipo: "cpu", nome: "Intel Core i5-12400F", soquete: "LGA1700", tdp: 65, geracao: 12, tipoRam: "DDR4", chipsetsCompativeis: ["H610", "B660", "Z690"] },
{ id: 89, tipo: "cpu", nome: "Intel Core i5-12600K", soquete: "LGA1700", tdp: 125, geracao: 12, tipoRam: "DDR5", chipsetsCompativeis: ["Z690", "Z790"] },
{ id: 90, tipo: "cpu", nome: "Intel Core i7-12700K", soquete: "LGA1700", tdp: 125, geracao: 12, tipoRam: "DDR5", chipsetsCompativeis: ["Z690", "Z790"] },
{ id: 91, tipo: "cpu", nome: "Intel Core i9-12900K", soquete: "LGA1700", tdp: 125, geracao: 12, tipoRam: "DDR5", chipsetsCompativeis: ["Z690", "Z790"] },

{ id: 92, tipo: "cpu", nome: "Intel Core i3-13100F", soquete: "LGA1700", tdp: 58, geracao: 13, tipoRam: "DDR4", chipsetsCompativeis: ["H610", "B760", "Z790"] },
{ id: 93, tipo: "cpu", nome: "Intel Core i5-13400F", soquete: "LGA1700", tdp: 65, geracao: 13, tipoRam: "DDR4", chipsetsCompativeis: ["B760", "Z790"] },
{ id: 94, tipo: "cpu", nome: "Intel Core i5-13600K", soquete: "LGA1700", tdp: 125, geracao: 13, tipoRam: "DDR5", chipsetsCompativeis: ["Z790"] },
{ id: 95, tipo: "cpu", nome: "Intel Core i7-13700K", soquete: "LGA1700", tdp: 125, geracao: 13, tipoRam: "DDR5", chipsetsCompativeis: ["Z790"] },
{ id: 96, tipo: "cpu", nome: "Intel Core i9-13900K", soquete: "LGA1700", tdp: 125, geracao: 13, tipoRam: "DDR5", chipsetsCompativeis: ["Z790"] },

{ id: 97, tipo: "cpu", nome: "Intel Core i5-14400F", soquete: "LGA1700", tdp: 65, geracao: 14, tipoRam: "DDR4", chipsetsCompativeis: ["B760", "Z790"] },
{ id: 98, tipo: "cpu", nome: "Intel Core i5-14600K", soquete: "LGA1700", tdp: 125, geracao: 14, tipoRam: "DDR5", chipsetsCompativeis: ["Z790"] },
{ id: 99, tipo: "cpu", nome: "Intel Core i7-14700K", soquete: "LGA1700", tdp: 125, geracao: 14, tipoRam: "DDR5", chipsetsCompativeis: ["Z790"] },
{ id: 100, tipo: "cpu", nome: "Intel Core i9-14900K", soquete: "LGA1700", tdp: 125, geracao: 14, tipoRam: "DDR5", chipsetsCompativeis: ["Z790"] },

// ================= PLACAS-MÃE AM4 =================
{ id: 106, tipo: "mobo", nome: "ASUS PRIME A320M-K", soquete: "AM4", chipset: "A320", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 107, tipo: "mobo", nome: "Gigabyte GA-A320M-S2H", soquete: "AM4", chipset: "A320", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 108, tipo: "mobo", nome: "MSI A320M-A PRO", soquete: "AM4", chipset: "A320", tipoRam: "DDR4", formato: "Micro-ATX" },

{ id: 109, tipo: "mobo", nome: "ASUS PRIME B350-PLUS", soquete: "AM4", chipset: "B350", tipoRam: "DDR4", formato: "ATX" },
{ id: 110, tipo: "mobo", nome: "Gigabyte AB350M-DS3H", soquete: "AM4", chipset: "B350", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 111, tipo: "mobo", nome: "MSI B350 TOMAHAWK", soquete: "AM4", chipset: "B350", tipoRam: "DDR4", formato: "ATX" },

{ id: 112, tipo: "mobo", nome: "ASUS PRIME B450M-GAMING", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 113, tipo: "mobo", nome: "ASUS TUF B450M-PRO GAMING", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 114, tipo: "mobo", nome: "ASUS ROG STRIX B450-F GAMING", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "ATX" },
{ id: 115, tipo: "mobo", nome: "Gigabyte B450M DS3H", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 116, tipo: "mobo", nome: "Gigabyte B450 AORUS ELITE", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "ATX" },
{ id: 117, tipo: "mobo", nome: "MSI B450M PRO-VDH MAX", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 118, tipo: "mobo", nome: "MSI B450 TOMAHAWK MAX", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "ATX" },
{ id: 119, tipo: "mobo", nome: "ASRock B450 Steel Legend", soquete: "AM4", chipset: "B450", tipoRam: "DDR4", formato: "ATX" },

{ id: 120, tipo: "mobo", nome: "ASUS PRIME X470-PRO", soquete: "AM4", chipset: "X470", tipoRam: "DDR4", formato: "ATX" },
{ id: 121, tipo: "mobo", nome: "Gigabyte X470 AORUS ULTRA GAMING", soquete: "AM4", chipset: "X470", tipoRam: "DDR4", formato: "ATX" },
{ id: 122, tipo: "mobo", nome: "MSI X470 GAMING PLUS", soquete: "AM4", chipset: "X470", tipoRam: "DDR4", formato: "ATX" },

{ id: 123, tipo: "mobo", nome: "ASUS PRIME A520M-E", soquete: "AM4", chipset: "A520", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 124, tipo: "mobo", nome: "Gigabyte A520M DS3H", soquete: "AM4", chipset: "A520", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 125, tipo: "mobo", nome: "MSI A520M-A PRO", soquete: "AM4", chipset: "A520", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 126, tipo: "mobo", nome: "ASRock A520M-HDV", soquete: "AM4", chipset: "A520", tipoRam: "DDR4", formato: "Micro-ATX" },

{ id: 127, tipo: "mobo", nome: "ASUS TUF GAMING B550M-PLUS", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 128, tipo: "mobo", nome: "ASUS ROG STRIX B550-F GAMING", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "ATX" },
{ id: 129, tipo: "mobo", nome: "Gigabyte B550M AORUS ELITE", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 130, tipo: "mobo", nome: "Gigabyte B550 AORUS PRO", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "ATX" },
{ id: 131, tipo: "mobo", nome: "MSI MAG B550 TOMAHAWK", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "ATX" },
{ id: 132, tipo: "mobo", nome: "MSI B550M PRO-VDH WIFI", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "Micro-ATX" },
{ id: 133, tipo: "mobo", nome: "ASRock B550 Steel Legend", soquete: "AM4", chipset: "B550", tipoRam: "DDR4", formato: "ATX" },

{ id: 134, tipo: "mobo", nome: "ASUS ROG CROSSHAIR VIII HERO", soquete: "AM4", chipset: "X570", tipoRam: "DDR4", formato: "ATX" },
{ id: 135, tipo: "mobo", nome: "Gigabyte X570 AORUS ELITE", soquete: "AM4", chipset: "X570", tipoRam: "DDR4", formato: "ATX" },
{ id: 136, tipo: "mobo", nome: "MSI MPG X570 GAMING PLUS", soquete: "AM4", chipset: "X570", tipoRam: "DDR4", formato: "ATX" },
{ id: 137, tipo: "mobo", nome: "ASRock X570 Steel Legend", soquete: "AM4", chipset: "X570", tipoRam: "DDR4", formato: "ATX" },

// ================= PLACAS-MÃE AM5 =================
{ id: 138, tipo: "mobo", nome: "ASUS PRIME A620M-K", soquete: "AM5", chipset: "A620", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 139, tipo: "mobo", nome: "Gigabyte A620M GAMING X", soquete: "AM5", chipset: "A620", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 140, tipo: "mobo", nome: "MSI PRO A620M-E", soquete: "AM5", chipset: "A620", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 141, tipo: "mobo", nome: "ASRock A620M-HDV/M.2", soquete: "AM5", chipset: "A620", tipoRam: "DDR5", formato: "Micro-ATX" },

{ id: 142, tipo: "mobo", nome: "ASUS TUF GAMING B650M-PLUS", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 143, tipo: "mobo", nome: "ASUS ROG STRIX B650-A GAMING WIFI", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "ATX" },
{ id: 144, tipo: "mobo", nome: "Gigabyte B650M AORUS ELITE", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 145, tipo: "mobo", nome: "Gigabyte B650 AORUS PRO AX", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "ATX" },
{ id: 146, tipo: "mobo", nome: "MSI MAG B650 TOMAHAWK WIFI", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "ATX" },
{ id: 147, tipo: "mobo", nome: "MSI PRO B650M-P", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 148, tipo: "mobo", nome: "ASRock B650M PRO RS", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "Micro-ATX" },
{ id: 149, tipo: "mobo", nome: "ASRock B650 Steel Legend", soquete: "AM5", chipset: "B650", tipoRam: "DDR5", formato: "ATX" },

{ id: 150, tipo: "mobo", nome: "ASUS PRIME X670-P", soquete: "AM5", chipset: "X670", tipoRam: "DDR5", formato: "ATX" },
{ id: 151, tipo: "mobo", nome: "ASUS ROG CROSSHAIR X670E HERO", soquete: "AM5", chipset: "X670", tipoRam: "DDR5", formato: "ATX" },
{ id: 152, tipo: "mobo", nome: "Gigabyte X670 AORUS ELITE AX", soquete: "AM5", chipset: "X670", tipoRam: "DDR5", formato: "ATX" },
{ id: 153, tipo: "mobo", nome: "MSI MPG X670E CARBON WIFI", soquete: "AM5", chipset: "X670", tipoRam: "DDR5", formato: "ATX" },
{ id: 154, tipo: "mobo", nome: "ASRock X670E Steel Legend", soquete: "AM5", chipset: "X670", tipoRam: "DDR5", formato: "ATX" },

{ id: 155, tipo: "mobo", nome: "ASUS ROG STRIX X870-A GAMING WIFI", soquete: "AM5", chipset: "X870", tipoRam: "DDR5", formato: "ATX" },
{ id: 156, tipo: "mobo", nome: "Gigabyte X870 AORUS ELITE WIFI7", soquete: "AM5", chipset: "X870", tipoRam: "DDR5", formato: "ATX" },
{ id: 157, tipo: "mobo", nome: "MSI MAG X870 TOMAHAWK WIFI", soquete: "AM5", chipset: "X870", tipoRam: "DDR5", formato: "ATX" },
{ id: 158, tipo: "mobo", nome: "ASRock X870 Steel Legend WIFI", soquete: "AM5", chipset: "X870", tipoRam: "DDR5", formato: "ATX" },

// ================= GPUs AMD RADEON RX =================
{ id: 207, tipo: "gpu", nome: "AMD Radeon RX 550", tdp: 50 },
{ id: 208, tipo: "gpu", nome: "AMD Radeon RX 560", tdp: 80 },
{ id: 209, tipo: "gpu", nome: "AMD Radeon RX 570", tdp: 150 },
{ id: 210, tipo: "gpu", nome: "AMD Radeon RX 580", tdp: 185 },
{ id: 211, tipo: "gpu", nome: "AMD Radeon RX 590", tdp: 225 },

{ id: 212, tipo: "gpu", nome: "AMD Radeon RX 5500 XT 4GB", tdp: 130 },
{ id: 213, tipo: "gpu", nome: "AMD Radeon RX 5500 XT 8GB", tdp: 130 },
{ id: 214, tipo: "gpu", nome: "AMD Radeon RX 5600 XT", tdp: 150 },
{ id: 215, tipo: "gpu", nome: "AMD Radeon RX 5700", tdp: 180 },
{ id: 216, tipo: "gpu", nome: "AMD Radeon RX 5700 XT", tdp: 225 },

{ id: 217, tipo: "gpu", nome: "AMD Radeon RX 6400", tdp: 53 },
{ id: 218, tipo: "gpu", nome: "AMD Radeon RX 6500 XT", tdp: 107 },
{ id: 219, tipo: "gpu", nome: "AMD Radeon RX 6600", tdp: 132 },
{ id: 220, tipo: "gpu", nome: "AMD Radeon RX 6600 XT", tdp: 160 },
{ id: 221, tipo: "gpu", nome: "AMD Radeon RX 6650 XT", tdp: 176 },

{ id: 222, tipo: "gpu", nome: "AMD Radeon RX 6700", tdp: 175 },
{ id: 223, tipo: "gpu", nome: "AMD Radeon RX 6700 XT", tdp: 230 },
{ id: 224, tipo: "gpu", nome: "AMD Radeon RX 6750 XT", tdp: 250 },
{ id: 225, tipo: "gpu", nome: "AMD Radeon RX 6800", tdp: 250 },
{ id: 226, tipo: "gpu", nome: "AMD Radeon RX 6800 XT", tdp: 300 },

{ id: 227, tipo: "gpu", nome: "AMD Radeon RX 6900 XT", tdp: 300 },
{ id: 228, tipo: "gpu", nome: "AMD Radeon RX 6950 XT", tdp: 335 },

{ id: 229, tipo: "gpu", nome: "AMD Radeon RX 7600", tdp: 165 },
{ id: 230, tipo: "gpu", nome: "AMD Radeon RX 7600 XT", tdp: 190 },
{ id: 231, tipo: "gpu", nome: "AMD Radeon RX 7700 XT", tdp: 245 },
{ id: 232, tipo: "gpu", nome: "AMD Radeon RX 7800 XT", tdp: 263 },
{ id: 233, tipo: "gpu", nome: "AMD Radeon RX 7900 GRE", tdp: 260 },

{ id: 234, tipo: "gpu", nome: "AMD Radeon RX 7900 XT", tdp: 315 },
{ id: 235, tipo: "gpu", nome: "AMD Radeon RX 7900 XTX", tdp: 355 },

{ id: 236, tipo: "gpu", nome: "AMD Radeon RX 8600 XT", tdp: 190 },
{ id: 237, tipo: "gpu", nome: "AMD Radeon RX 8700 XT", tdp: 260 },
{ id: 238, tipo: "gpu", nome: "AMD Radeon RX 8800 XT", tdp: 300 },

{ id: 239, tipo: "gpu", nome: "AMD Radeon RX 9700", tdp: 260 },
{ id: 240, tipo: "gpu", nome: "AMD Radeon RX 9700 XT", tdp: 320 },

// ================= GPUs AMD RADEON PRO =================
{ id: 241, tipo: "gpu", nome: "AMD Radeon Pro W6400", tdp: 50 },
{ id: 242, tipo: "gpu", nome: "AMD Radeon Pro W6600", tdp: 100 },
{ id: 243, tipo: "gpu", nome: "AMD Radeon Pro W6800", tdp: 250 },
{ id: 244, tipo: "gpu", nome: "AMD Radeon Pro W7800", tdp: 260 },
{ id: 245, tipo: "gpu", nome: "AMD Radeon Pro W7900", tdp: 295 },

// ================= VARIANTES CUSTOM =================
{ id: 246, tipo: "gpu", nome: "ASUS ROG STRIX RX 6600 XT", tdp: 165 },
{ id: 247, tipo: "gpu", nome: "Gigabyte RX 6700 XT Gaming OC", tdp: 230 },
{ id: 248, tipo: "gpu", nome: "MSI RX 6800 XT Gaming X Trio", tdp: 300 },
{ id: 249, tipo: "gpu", nome: "Sapphire Nitro+ RX 7800 XT", tdp: 265 },
{ id: 250, tipo: "gpu", nome: "XFX Speedster MERC RX 7900 XTX", tdp: 355 },

// ================= NVIDIA GTX 10 =================
{ id: 251, tipo: "gpu", nome: "NVIDIA GeForce GTX 1050", tdp: 75 },
{ id: 252, tipo: "gpu", nome: "NVIDIA GeForce GTX 1050 Ti", tdp: 75 },
{ id: 253, tipo: "gpu", nome: "NVIDIA GeForce GTX 1060 3GB", tdp: 120 },
{ id: 254, tipo: "gpu", nome: "NVIDIA GeForce GTX 1060 6GB", tdp: 120 },
{ id: 255, tipo: "gpu", nome: "NVIDIA GeForce GTX 1070", tdp: 150 },
{ id: 256, tipo: "gpu", nome: "NVIDIA GeForce GTX 1070 Ti", tdp: 180 },
{ id: 257, tipo: "gpu", nome: "NVIDIA GeForce GTX 1080", tdp: 180 },
{ id: 258, tipo: "gpu", nome: "NVIDIA GeForce GTX 1080 Ti", tdp: 250 },
{ id: 259, tipo: "gpu", nome: "NVIDIA Titan X Pascal", tdp: 250 },

// ================= NVIDIA GTX 16 =================
{ id: 260, tipo: "gpu", nome: "NVIDIA GeForce GTX 1630", tdp: 75 },
{ id: 261, tipo: "gpu", nome: "NVIDIA GeForce GTX 1650", tdp: 75 },
{ id: 262, tipo: "gpu", nome: "NVIDIA GeForce GTX 1650 SUPER", tdp: 100 },
{ id: 263, tipo: "gpu", nome: "NVIDIA GeForce GTX 1660", tdp: 120 },
{ id: 264, tipo: "gpu", nome: "NVIDIA GeForce GTX 1660 SUPER", tdp: 125 },
{ id: 265, tipo: "gpu", nome: "NVIDIA GeForce GTX 1660 Ti", tdp: 120 },

// ================= NVIDIA RTX 20 =================
{ id: 266, tipo: "gpu", nome: "NVIDIA GeForce RTX 2060", tdp: 160 },
{ id: 267, tipo: "gpu", nome: "NVIDIA GeForce RTX 2060 SUPER", tdp: 175 },
{ id: 268, tipo: "gpu", nome: "NVIDIA GeForce RTX 2070", tdp: 175 },
{ id: 269, tipo: "gpu", nome: "NVIDIA GeForce RTX 2070 SUPER", tdp: 215 },
{ id: 270, tipo: "gpu", nome: "NVIDIA GeForce RTX 2080", tdp: 215 },
{ id: 271, tipo: "gpu", nome: "NVIDIA GeForce RTX 2080 SUPER", tdp: 250 },
{ id: 272, tipo: "gpu", nome: "NVIDIA GeForce RTX 2080 Ti", tdp: 260 },
{ id: 273, tipo: "gpu", nome: "NVIDIA Titan RTX", tdp: 280 },

// ================= NVIDIA RTX 30 =================
{ id: 274, tipo: "gpu", nome: "NVIDIA GeForce RTX 3050", tdp: 130 },
{ id: 275, tipo: "gpu", nome: "NVIDIA GeForce RTX 3060", tdp: 170 },
{ id: 276, tipo: "gpu", nome: "NVIDIA GeForce RTX 3060 Ti", tdp: 200 },
{ id: 277, tipo: "gpu", nome: "NVIDIA GeForce RTX 3070", tdp: 220 },
{ id: 278, tipo: "gpu", nome: "NVIDIA GeForce RTX 3070 Ti", tdp: 290 },
{ id: 279, tipo: "gpu", nome: "NVIDIA GeForce RTX 3080 10GB", tdp: 320 },
{ id: 280, tipo: "gpu", nome: "NVIDIA GeForce RTX 3080 12GB", tdp: 350 },
{ id: 281, tipo: "gpu", nome: "NVIDIA GeForce RTX 3080 Ti", tdp: 350 },
{ id: 282, tipo: "gpu", nome: "NVIDIA GeForce RTX 3090", tdp: 350 },
{ id: 283, tipo: "gpu", nome: "NVIDIA GeForce RTX 3090 Ti", tdp: 450 },

// ================= NVIDIA RTX 40 =================
{ id: 284, tipo: "gpu", nome: "NVIDIA GeForce RTX 4060", tdp: 115 },
{ id: 285, tipo: "gpu", nome: "NVIDIA GeForce RTX 4060 Ti 8GB", tdp: 160 },
{ id: 286, tipo: "gpu", nome: "NVIDIA GeForce RTX 4060 Ti 16GB", tdp: 165 },
{ id: 287, tipo: "gpu", nome: "NVIDIA GeForce RTX 4070", tdp: 200 },
{ id: 288, tipo: "gpu", nome: "NVIDIA GeForce RTX 4070 SUPER", tdp: 220 },
{ id: 289, tipo: "gpu", nome: "NVIDIA GeForce RTX 4070 Ti", tdp: 285 },
{ id: 290, tipo: "gpu", nome: "NVIDIA GeForce RTX 4070 Ti SUPER", tdp: 285 },
{ id: 291, tipo: "gpu", nome: "NVIDIA GeForce RTX 4080", tdp: 320 },
{ id: 292, tipo: "gpu", nome: "NVIDIA GeForce RTX 4080 SUPER", tdp: 320 },
{ id: 293, tipo: "gpu", nome: "NVIDIA GeForce RTX 4090", tdp: 450 },

// ================= NVIDIA RTX 50 =================
{ id: 294, tipo: "gpu", nome: "NVIDIA GeForce RTX 5050", tdp: 130 },
{ id: 295, tipo: "gpu", nome: "NVIDIA GeForce RTX 5060", tdp: 160 },
{ id: 296, tipo: "gpu", nome: "NVIDIA GeForce RTX 5060 Ti", tdp: 180 },
{ id: 297, tipo: "gpu", nome: "NVIDIA GeForce RTX 5070", tdp: 250 },
{ id: 298, tipo: "gpu", nome: "NVIDIA GeForce RTX 5070 Ti", tdp: 300 },
{ id: 299, tipo: "gpu", nome: "NVIDIA GeForce RTX 5080", tdp: 350 },
{ id: 300, tipo: "gpu", nome: "NVIDIA GeForce RTX 5090", tdp: 600 },

// ================= VARIANTES CUSTOM =================
{ id: 301, tipo: "gpu", nome: "ASUS ROG STRIX RTX 3070", tdp: 240 },
{ id: 302, tipo: "gpu", nome: "Gigabyte RTX 4070 Gaming OC", tdp: 220 },
{ id: 303, tipo: "gpu", nome: "MSI RTX 4080 SUPRIM X", tdp: 340 },
{ id: 304, tipo: "gpu", nome: "ZOTAC RTX 4060 Twin Edge", tdp: 115 },
{ id: 305, tipo: "gpu", nome: "PNY RTX 4090 XLR8", tdp: 450 },

// ================= INTEL ARC A-SERIES =================
{ id: 306, tipo: "gpu", nome: "Intel Arc A310", tdp: 75 },
{ id: 307, tipo: "gpu", nome: "Intel Arc A350M", tdp: 60 },
{ id: 308, tipo: "gpu", nome: "Intel Arc A370M", tdp: 50 },
{ id: 309, tipo: "gpu", nome: "Intel Arc A380", tdp: 75 },
{ id: 310, tipo: "gpu", nome: "Intel Arc A550M", tdp: 95 },
{ id: 311, tipo: "gpu", nome: "Intel Arc A570M", tdp: 120 },
{ id: 312, tipo: "gpu", nome: "Intel Arc A580", tdp: 185 },
{ id: 313, tipo: "gpu", nome: "Intel Arc A730M", tdp: 120 },
{ id: 314, tipo: "gpu", nome: "Intel Arc A750", tdp: 225 },
{ id: 315, tipo: "gpu", nome: "Intel Arc A770 8GB", tdp: 225 },
{ id: 316, tipo: "gpu", nome: "Intel Arc A770 16GB", tdp: 225 },

// ================= INTEL ARC BATTLEMAGE =================
{ id: 317, tipo: "gpu", nome: "Intel Arc B380", tdp: 115 },
{ id: 318, tipo: "gpu", nome: "Intel Arc B580", tdp: 190 },
{ id: 319, tipo: "gpu", nome: "Intel Arc B770", tdp: 250 },

// ================= INTEL ARC PRO =================
{ id: 320, tipo: "gpu", nome: "Intel Arc Pro A40", tdp: 50 },
{ id: 321, tipo: "gpu", nome: "Intel Arc Pro A50", tdp: 75 },
{ id: 322, tipo: "gpu", nome: "Intel Arc Pro A60", tdp: 130 },

// ================= VARIANTES CUSTOM =================
{ id: 323, tipo: "gpu", nome: "ASRock Intel Arc A380 Challenger ITX", tdp: 75 },
{ id: 324, tipo: "gpu", nome: "Sparkle Intel Arc A580 ORC OC", tdp: 185 },
{ id: 325, tipo: "gpu", nome: "Acer Predator BiFrost Intel Arc A770", tdp: 225 },
{ id: 326, tipo: "gpu", nome: "GUNNIR Intel Arc A750 Photon", tdp: 225 },
{ id: 327, tipo: "gpu", nome: "ASRock Intel Arc A770 Phantom Gaming", tdp: 225 },

// ================= FONTES 400W =================
{ id: 406, tipo: "psu", nome: "Corsair CV450 450W 80+ Bronze", potencia: 450 },
{ id: 407, tipo: "psu", nome: "Cooler Master MWE 450 White V2", potencia: 450 },
{ id: 408, tipo: "psu", nome: "EVGA 450 BR 80+ Bronze", potencia: 450 },
{ id: 409, tipo: "psu", nome: "Gigabyte P450B 80+ Bronze", potencia: 450 },
{ id: 410, tipo: "psu", nome: "Thermaltake Smart 430W", potencia: 430 },

// ================= FONTES 500W =================
{ id: 411, tipo: "psu", nome: "Corsair CX550 550W 80+ Bronze", potencia: 550 },
{ id: 412, tipo: "psu", nome: "Cooler Master MWE 550 Bronze V2", potencia: 550 },
{ id: 413, tipo: "psu", nome: "EVGA 500 BR 80+ Bronze", potencia: 500 },
{ id: 414, tipo: "psu", nome: "Gigabyte P550B 80+ Bronze", potencia: 550 },
{ id: 415, tipo: "psu", nome: "XPG Pylon 550W 80+ Bronze", potencia: 550 },
{ id: 416, tipo: "psu", nome: "MSI MAG A550BN", potencia: 550 },

// ================= FONTES 600W =================
{ id: 417, tipo: "psu", nome: "Corsair CV650 650W 80+ Bronze", potencia: 650 },
{ id: 418, tipo: "psu", nome: "Cooler Master MWE 650 Gold V2", potencia: 650 },
{ id: 419, tipo: "psu", nome: "EVGA 650 BQ 80+ Bronze", potencia: 650 },
{ id: 420, tipo: "psu", nome: "Gigabyte P650B 80+ Bronze", potencia: 650 },
{ id: 421, tipo: "psu", nome: "XPG Core Reactor 650W 80+ Gold", potencia: 650 },
{ id: 422, tipo: "psu", nome: "MSI MPG A650GF", potencia: 650 },
{ id: 423, tipo: "psu", nome: "Thermaltake Toughpower GF1 650W", potencia: 650 },

// ================= FONTES 700W =================
{ id: 424, tipo: "psu", nome: "Corsair RM750e 750W 80+ Gold", potencia: 750 },
{ id: 425, tipo: "psu", nome: "Cooler Master GX750 Gold", potencia: 750 },
{ id: 426, tipo: "psu", nome: "EVGA SuperNOVA 750 G5", potencia: 750 },
{ id: 427, tipo: "psu", nome: "Gigabyte UD750GM", potencia: 750 },
{ id: 428, tipo: "psu", nome: "XPG Core Reactor 750W", potencia: 750 },
{ id: 429, tipo: "psu", nome: "MSI MPG A750GF", potencia: 750 },
{ id: 430, tipo: "psu", nome: "Thermaltake Toughpower GF A3 750W", potencia: 750 },
{ id: 431, tipo: "psu", nome: "Seasonic Focus GX-750", potencia: 750 },

// ================= FONTES 800W =================
{ id: 432, tipo: "psu", nome: "Corsair RM850x 850W 80+ Gold", potencia: 850 },
{ id: 433, tipo: "psu", nome: "Cooler Master V850 Gold V2", potencia: 850 },
{ id: 434, tipo: "psu", nome: "EVGA SuperNOVA 850 G6", potencia: 850 },
{ id: 435, tipo: "psu", nome: "Gigabyte UD850GM", potencia: 850 },
{ id: 436, tipo: "psu", nome: "XPG Cybercore 850W Platinum", potencia: 850 },
{ id: 437, tipo: "psu", nome: "MSI MPG A850G PCIE5", potencia: 850 },
{ id: 438, tipo: "psu", nome: "Thermaltake Toughpower PF1 850W", potencia: 850 },
{ id: 439, tipo: "psu", nome: "Seasonic Vertex GX-850", potencia: 850 },

// ================= FONTES 1000W =================
{ id: 440, tipo: "psu", nome: "Corsair HX1000i 1000W Platinum", potencia: 1000 },
{ id: 441, tipo: "psu", nome: "Cooler Master V1000 Platinum", potencia: 1000 },
{ id: 442, tipo: "psu", nome: "EVGA SuperNOVA 1000 G7", potencia: 1000 },
{ id: 443, tipo: "psu", nome: "Gigabyte UD1000GM PG5", potencia: 1000 },
{ id: 444, tipo: "psu", nome: "XPG Fusion 1000 Titanium", potencia: 1000 },
{ id: 445, tipo: "psu", nome: "MSI MEG Ai1000P", potencia: 1000 },
{ id: 446, tipo: "psu", nome: "Thermaltake Toughpower iRGB Plus 1000W", potencia: 1000 },
{ id: 447, tipo: "psu", nome: "Seasonic Prime TX-1000", potencia: 1000 },

// ================= FONTES 1200W =================
{ id: 448, tipo: "psu", nome: "Corsair HX1200 1200W Platinum", potencia: 1200 },
{ id: 449, tipo: "psu", nome: "Cooler Master XG1200 Platinum", potencia: 1200 },
{ id: 450, tipo: "psu", nome: "EVGA SuperNOVA 1200 P3", potencia: 1200 },
{ id: 451, tipo: "psu", nome: "Gigabyte UD1300GM PG5", potencia: 1300 },
{ id: 452, tipo: "psu", nome: "XPG Cybercore II 1200W", potencia: 1200 },
{ id: 453, tipo: "psu", nome: "MSI MEG Ai1300P", potencia: 1300 },
{ id: 454, tipo: "psu", nome: "Thermaltake Toughpower GF3 1200W", potencia: 1200 },
{ id: 455, tipo: "psu", nome: "Seasonic Prime PX-1300", potencia: 1300 },

// ================= DDR4 8GB =================
{ id: 456, tipo: "ram", nome: "Corsair Vengeance LPX 8GB DDR4-2666", tipoRam: "DDR4" },
{ id: 457, tipo: "ram", nome: "Corsair Vengeance RGB Pro 8GB DDR4-3200", tipoRam: "DDR4" },
{ id: 458, tipo: "ram", nome: "Kingston Fury Beast 8GB DDR4-3200", tipoRam: "DDR4" },
{ id: 459, tipo: "ram", nome: "Kingston HyperX Fury 8GB DDR4-2666", tipoRam: "DDR4" },
{ id: 460, tipo: "ram", nome: "XPG Gammix D10 8GB DDR4-3000", tipoRam: "DDR4" },
{ id: 461, tipo: "ram", nome: "XPG Gammix D20 8GB DDR4-3200", tipoRam: "DDR4" },
{ id: 462, tipo: "ram", nome: "Crucial Ballistix 8GB DDR4-3200", tipoRam: "DDR4" },
{ id: 463, tipo: "ram", nome: "G.Skill Ripjaws V 8GB DDR4-3200", tipoRam: "DDR4" },

// ================= DDR4 16GB (2x8GB) =================
{ id: 464, tipo: "ram", nome: "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200", tipoRam: "DDR4" },
{ id: 465, tipo: "ram", nome: "Corsair Dominator Platinum RGB 16GB DDR4-3600", tipoRam: "DDR4" },
{ id: 466, tipo: "ram", nome: "Kingston Fury Beast 16GB (2x8GB) DDR4-3200", tipoRam: "DDR4" },
{ id: 467, tipo: "ram", nome: "Kingston Fury Renegade 16GB DDR4-3600", tipoRam: "DDR4" },
{ id: 468, tipo: "ram", nome: "XPG Spectrix D50 16GB DDR4-3600", tipoRam: "DDR4" },
{ id: 469, tipo: "ram", nome: "XPG Gammix D45 16GB DDR4-3200", tipoRam: "DDR4" },
{ id: 470, tipo: "ram", nome: "G.Skill Trident Z RGB 16GB DDR4-3600", tipoRam: "DDR4" },
{ id: 471, tipo: "ram", nome: "Crucial Ballistix RGB 16GB DDR4-3200", tipoRam: "DDR4" },

// ================= DDR4 32GB =================
{ id: 472, tipo: "ram", nome: "Corsair Vengeance LPX 32GB (2x16GB) DDR4-3200", tipoRam: "DDR4" },
{ id: 473, tipo: "ram", nome: "Corsair Dominator Platinum RGB 32GB DDR4-3600", tipoRam: "DDR4" },
{ id: 474, tipo: "ram", nome: "Kingston Fury Beast 32GB DDR4-3200", tipoRam: "DDR4" },
{ id: 475, tipo: "ram", nome: "Kingston Fury Renegade 32GB DDR4-3600", tipoRam: "DDR4" },
{ id: 476, tipo: "ram", nome: "XPG Spectrix D60G 32GB DDR4-3600", tipoRam: "DDR4" },
{ id: 477, tipo: "ram", nome: "G.Skill Ripjaws V 32GB DDR4-3600", tipoRam: "DDR4" },
{ id: 478, tipo: "ram", nome: "Crucial Pro 32GB DDR4-3200", tipoRam: "DDR4" },

// ================= DDR4 64GB =================
{ id: 479, tipo: "ram", nome: "Corsair Vengeance RGB Pro 64GB DDR4-3600", tipoRam: "DDR4" },
{ id: 480, tipo: "ram", nome: "Kingston Fury Beast 64GB DDR4-3200", tipoRam: "DDR4" },
{ id: 481, tipo: "ram", nome: "XPG Lancer RGB 64GB DDR4-3600", tipoRam: "DDR4" },
{ id: 482, tipo: "ram", nome: "G.Skill Trident Z Neo 64GB DDR4-3600", tipoRam: "DDR4" },
{ id: 483, tipo: "ram", nome: "Crucial Pro 64GB DDR4-3200", tipoRam: "DDR4" },

// ================= DDR5 8GB =================
{ id: 484, tipo: "ram", nome: "Kingston Fury Beast 8GB DDR5-5200", tipoRam: "DDR5" },
{ id: 485, tipo: "ram", nome: "Corsair Vengeance 8GB DDR5-5200", tipoRam: "DDR5" },
{ id: 486, tipo: "ram", nome: "XPG Lancer Blade 8GB DDR5-5600", tipoRam: "DDR5" },

// ================= DDR5 16GB =================
{ id: 487, tipo: "ram", nome: "Corsair Vengeance 16GB DDR5-5600", tipoRam: "DDR5" },
{ id: 488, tipo: "ram", nome: "Kingston Fury Beast 16GB DDR5-5600", tipoRam: "DDR5" },
{ id: 489, tipo: "ram", nome: "XPG Lancer RGB 16GB DDR5-6000", tipoRam: "DDR5" },
{ id: 490, tipo: "ram", nome: "G.Skill Ripjaws S5 16GB DDR5-6000", tipoRam: "DDR5" },
{ id: 491, tipo: "ram", nome: "Crucial Pro 16GB DDR5-5600", tipoRam: "DDR5" },

// ================= DDR5 32GB =================
{ id: 492, tipo: "ram", nome: "Corsair Dominator Titanium 32GB DDR5-6000", tipoRam: "DDR5" },
{ id: 493, tipo: "ram", nome: "Kingston Fury Renegade 32GB DDR5-6400", tipoRam: "DDR5" },
{ id: 494, tipo: "ram", nome: "XPG Lancer Blade RGB 32GB DDR5-6000", tipoRam: "DDR5" },
{ id: 495, tipo: "ram", nome: "G.Skill Trident Z5 RGB 32GB DDR5-6400", tipoRam: "DDR5" },
{ id: 496, tipo: "ram", nome: "Crucial Pro Overclocking 32GB DDR5-6000", tipoRam: "DDR5" },

// ================= DDR5 64GB =================
{ id: 497, tipo: "ram", nome: "Corsair Dominator Titanium 64GB DDR5-6400", tipoRam: "DDR5" },
{ id: 498, tipo: "ram", nome: "Kingston Fury Beast 64GB DDR5-6000", tipoRam: "DDR5" },
{ id: 499, tipo: "ram", nome: "XPG Lancer RGB 64GB DDR5-6400", tipoRam: "DDR5" },
{ id: 500, tipo: "ram", nome: "G.Skill Trident Z5 Neo RGB 64GB DDR5-6000", tipoRam: "DDR5" },
{ id: 501, tipo: "ram", nome: "Crucial Pro 64GB DDR5-5600", tipoRam: "DDR5" },

// ================= GABINETES CORSAIR =================
{ id: 506, tipo: "case", nome: "Corsair 3000D Airflow", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 507, tipo: "case", nome: "Corsair 4000D Airflow RGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 508, tipo: "case", nome: "Corsair 5000D Airflow", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 509, tipo: "case", nome: "Corsair iCUE 5000X RGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 510, tipo: "case", nome: "Corsair 7000D Airflow", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES NZXT =================
{ id: 511, tipo: "case", nome: "NZXT H5 Flow RGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 512, tipo: "case", nome: "NZXT H6 Flow", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 513, tipo: "case", nome: "NZXT H7 Flow", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 514, tipo: "case", nome: "NZXT H9 Flow", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES COOLER MASTER =================
{ id: 515, tipo: "case", nome: "Cooler Master MasterBox MB311L", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 516, tipo: "case", nome: "Cooler Master MasterBox TD500 Mesh", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 517, tipo: "case", nome: "Cooler Master HAF 500", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 518, tipo: "case", nome: "Cooler Master COSMOS C700M", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES LIAN LI =================
{ id: 519, tipo: "case", nome: "Lian Li Lancool 205 Mesh", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 520, tipo: "case", nome: "Lian Li Lancool III", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 521, tipo: "case", nome: "Lian Li O11 Dynamic EVO", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 522, tipo: "case", nome: "Lian Li O11 Vision", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES FRACTAL =================
{ id: 523, tipo: "case", nome: "Fractal Design Pop Air", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 524, tipo: "case", nome: "Fractal Design Meshify 2", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 525, tipo: "case", nome: "Fractal Design North", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 526, tipo: "case", nome: "Fractal Design Torrent", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES MONTECH =================
{ id: 527, tipo: "case", nome: "Montech Air 100 ARGB", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 528, tipo: "case", nome: "Montech Sky Two", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 529, tipo: "case", nome: "Montech King 95 Pro", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES DEEPCOOL =================
{ id: 530, tipo: "case", nome: "DeepCool CC560", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 531, tipo: "case", nome: "DeepCool CH370", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 532, tipo: "case", nome: "DeepCool CH560 Digital", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 533, tipo: "case", nome: "DeepCool Morpheus", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES THERMALTAKE =================
{ id: 534, tipo: "case", nome: "Thermaltake Versa H18", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 535, tipo: "case", nome: "Thermaltake S200 TG ARGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 536, tipo: "case", nome: "Thermaltake Divider 300 TG", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 537, tipo: "case", nome: "Thermaltake Core P3 TG Pro", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES GAMDIAS =================
{ id: 538, tipo: "case", nome: "Gamdias Athena M6 Lite", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 539, tipo: "case", nome: "Gamdias Talos E3", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 540, tipo: "case", nome: "Gamdias Neso P1", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES HYTE =================
{ id: 541, tipo: "case", nome: "HYTE Y40", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 542, tipo: "case", nome: "HYTE Y60", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 543, tipo: "case", nome: "HYTE Y70 Touch", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES REDRAGON =================
{ id: 544, tipo: "case", nome: "Redragon Grapple", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 545, tipo: "case", nome: "Redragon Wheel Jack", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 546, tipo: "case", nome: "Redragon Superion", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES AEROCOOL =================
{ id: 547, tipo: "case", nome: "Aerocool Cylon", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 548, tipo: "case", nome: "Aerocool Hive FRGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 549, tipo: "case", nome: "Aerocool AirHawk Duo", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES ASUS =================
{ id: 550, tipo: "case", nome: "ASUS TUF Gaming GT301", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 551, tipo: "case", nome: "ASUS Prime AP201", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 552, tipo: "case", nome: "ASUS ROG Hyperion GR701", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },
// ================= GABINETES HAYOM =================
{ id: 553, tipo: "case", nome: "Hayom GB1711", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 554, tipo: "case", nome: "Hayom GB1721", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 555, tipo: "case", nome: "Hayom GB1735", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 556, tipo: "case", nome: "Hayom GB1740", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 557, tipo: "case", nome: "Hayom GB1752", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 558, tipo: "case", nome: "Hayom GB1760 RGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 559, tipo: "case", nome: "Hayom GB1775 Glass", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 560, tipo: "case", nome: "Hayom Gamer Black Edition", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
// ================= GABINETES HAYOM =================
{ id: 553, tipo: "case", nome: "Hayom GB1711", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 554, tipo: "case", nome: "Hayom GB1721", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 555, tipo: "case", nome: "Hayom GB1735", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 556, tipo: "case", nome: "Hayom GB1740", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 557, tipo: "case", nome: "Hayom GB1752", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 558, tipo: "case", nome: "Hayom GB1760 RGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 559, tipo: "case", nome: "Hayom GB1775 Glass", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 560, tipo: "case", nome: "Hayom Gamer Black Edition", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },

// ================= GABINETES RISE MODE =================
{ id: 561, tipo: "case", nome: "Rise Mode Glass 06X", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 562, tipo: "case", nome: "Rise Mode Galaxy Curved", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 563, tipo: "case", nome: "Rise Mode Z3 Glass", suportaFormato: ["Micro-ATX", "Mini-ITX"] },
{ id: 564, tipo: "case", nome: "Rise Mode X1 White", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 565, tipo: "case", nome: "Rise Mode Wave RGB", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 566, tipo: "case", nome: "Rise Mode Black Hawk", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 567, tipo: "case", nome: "Rise Mode Crystal Glass", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 568, tipo: "case", nome: "Rise Mode Dual Chamber", suportaFormato: ["E-ATX", "ATX", "Micro-ATX", "Mini-ITX"] },
// ================= FONTES RISE MODE =================
{ id: 569, tipo: "psu", nome: "Rise Mode Zeus 500W 80+ Bronze", potencia: 500 },
{ id: 570, tipo: "psu", nome: "Rise Mode Zeus 600W 80+ Bronze", potencia: 600 },
{ id: 571, tipo: "psu", nome: "Rise Mode Zeus 700W 80+ Bronze", potencia: 700 },
{ id: 572, tipo: "psu", nome: "Rise Mode Atlas 650W 80+ Gold", potencia: 650 },
{ id: 573, tipo: "psu", nome: "Rise Mode Atlas 750W 80+ Gold", potencia: 750 },
{ id: 574, tipo: "psu", nome: "Rise Mode Atlas 850W 80+ Gold", potencia: 850 },

// ================= COOLERS RISE MODE =================
{ id: 575, tipo: "cooler", nome: "Rise Mode Frost RGB Air Cooler", tdpSuportado: 180 },
{ id: 576, tipo: "cooler", nome: "Rise Mode Winter Black", tdpSuportado: 220 },
{ id: 577, tipo: "cooler", nome: "Rise Mode Aura Ice 240MM", tdpSuportado: 250 },
{ id: 578, tipo: "cooler", nome: "Rise Mode Aura Ice 360MM", tdpSuportado: 320 },
{ id: 579, tipo: "cooler", nome: "Rise Mode RGB Fan Kit 3x120mm", tamanho: 120 },

// ================= PERIFÉRICOS HAYOM =================
{ id: 580, tipo: "periferico", nome: "Hayom TC320 Teclado Gamer RGB" },
{ id: 581, tipo: "periferico", nome: "Hayom GM400 Mouse Gamer RGB" },
{ id: 582, tipo: "periferico", nome: "Hayom Headset Gamer HV-H2232D" },
{ id: 583, tipo: "periferico", nome: "Hayom Mousepad Speed MPG01" },

// ================= MEMÓRIAS POPULARES BR =================
{ id: 584, tipo: "ram", nome: "Rise Mode Z 16GB DDR4-3200", tipoRam: "DDR4" },
{ id: 585, tipo: "ram", nome: "Rise Mode Diamond RGB 32GB DDR4-3600", tipoRam: "DDR4" },

// ================= FONTES POPULARES BR =================
{ id: 586, tipo: "psu", nome: "MSI MAG A650BN 650W", potencia: 650 },
{ id: 587, tipo: "psu", nome: "Corsair CX650 650W Bronze", potencia: 650 },
{ id: 588, tipo: "psu", nome: "DeepCool PK650D 650W", potencia: 650 },
{ id: 589, tipo: "psu", nome: "XPG Core Reactor II VE 850W", potencia: 850 },

// ================= GABINETES POPULARES BR =================
{ id: 590, tipo: "case", nome: "Montech XR", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 591, tipo: "case", nome: "Aerocool Bolt", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 592, tipo: "case", nome: "Redragon Wideload Pro", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 593, tipo: "case", nome: "Pichau HX710L", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },
{ id: 594, tipo: "case", nome: "Mancer Narok", suportaFormato: ["ATX", "Micro-ATX", "Mini-ITX"] },

// ================= WATER COOLERS POPULARES BR =================
{ id: 595, tipo: "cooler", nome: "DeepCool LE500 240MM", tdpSuportado: 260 },
{ id: 596, tipo: "cooler", nome: "Cooler Master ML240L V2 RGB", tdpSuportado: 250 },
{ id: 597, tipo: "cooler", nome: "Corsair H100 RGB", tdpSuportado: 280 },
{ id: 598, tipo: "cooler", nome: "Rise Mode Aura Frost 240MM", tdpSuportado: 240 },
{ id: 599, tipo: "cooler", nome: "NZXT Kraken 360 RGB", tdpSuportado: 320 },

// ================= FANS RGB POPULARES =================
{ id: 600, tipo: "cooler", nome: "Rise Mode Laser RGB Fan 120MM", tamanho: 120 },
{ id: 601, tipo: "cooler", nome: "Cooler Master SickleFlow 120 ARGB", tamanho: 120 },
{ id: 602, tipo: "cooler", nome: "Corsair AF120 RGB Elite", tamanho: 120 },
{ id: 603, tipo: "cooler", nome: "DeepCool FC120 ARGB", tamanho: 120 },
{ id: 604, tipo: "cooler", nome: "Lian Li UNI FAN SL120", tamanho: 120 },

// ================= SSDs MAIS POPULARES =================
{ id: 605, tipo: "ssd", nome: "Kingston NV2 1TB NVMe", interface: "NVMe" },
{ id: 606, tipo: "ssd", nome: "WD Black SN770 1TB", interface: "NVMe" },
{ id: 607, tipo: "ssd", nome: "Crucial P3 Plus 1TB", interface: "NVMe" },
{ id: 608, tipo: "ssd", nome: "XPG S70 Blade 1TB", interface: "NVMe" },
{ id: 609, tipo: "ssd", nome: "Samsung 990 EVO 1TB", interface: "NVMe" },

// ================= SSDs SATA =================
{ id: 610, tipo: "ssd", nome: "Kingston A400 480GB", interface: "SATA" },
{ id: 611, tipo: "ssd", nome: "Crucial BX500 500GB", interface: "SATA" },
{ id: 612, tipo: "ssd", nome: "WD Green 480GB", interface: "SATA" },
{ id: 613, tipo: "ssd", nome: "SanDisk SSD Plus 480GB", interface: "SATA" },
{ id: 614, tipo: "ssd", nome: "Gigabyte SSD 480GB", interface: "SATA" },

]
