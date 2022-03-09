/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ProductType',
      [{
        productTypeId: 1,
        productTypeName: 'Iphones',
        productLineId: 1,
      },
      {
        productTypeId: 2,
        productTypeName: 'smartphones Android',
        productLineId: 1,
      },
      {
        productTypeId: 3,
        productTypeName: 'smartphones Windows',
        productLineId: 1,
      },
      {
        productTypeId: 4,
        productTypeName: 'smartphones Blackberry',
        productLineId: 1,
      },
      {
        productTypeId: 5,
        productTypeName: 'acessórios para smartphones',
        productLineId: 1,
      },
      {
        productTypeId: 6,
        productTypeName: 'outros sistemas operacionais',
        productLineId: 1,
      },
      {
        productTypeId: 7,
        productTypeName: 'telefones Voip',
        productLineId: 2,
      },
      {
        productTypeId: 8,
        productTypeName: 'sistema operacional Apple',
        productLineId: 3,
      },
      {
        productTypeId: 9,
        productTypeName: 'sistema operacional Microsoft',
        productLineId: 3,
      },
      {
        productTypeId: 10,
        productTypeName: 'sistema operacional Linux',
        productLineId: 3,
      },
      {
        productTypeId: 11,
        productTypeName: 'sistema operacional Chrome',
        productLineId: 3,
      },
      {
        productTypeId: 12,
        productTypeName: 'outros sistemas operacionais',
        productLineId: 3,
      },
      {
        productTypeId: 13,
        productTypeName: 'sistema operacional Apple',
        productLineId: 4,
      },
      {
        productTypeId: 14,
        productTypeName: 'sistema operacional Microsoft',
        productLineId: 4,
      },
      {
        productTypeId: 15,
        productTypeName: 'sistema operacional Linux',
        productLineId: 4,
      },
      {
        productTypeId: 16,
        productTypeName: 'sistema operacional Chrome',
        productLineId: 4,
      },
      {
        productTypeId: 17,
        productTypeName: 'outros sistemas operacionais',
        productLineId: 4,
      },
      {
        productTypeId: 18,
        productTypeName: 'Ipads',
        productLineId: 5,
      },
      {
        productTypeId: 19,
        productTypeName: 'tablets Android',
        productLineId: 5,
      },
      {
        productTypeId: 20,
        productTypeName: 'tablets Windows',
        productLineId: 5,
      },
      {
        productTypeId: 21,
        productTypeName: 'e-readers',
        productLineId: 5,
      },
      {
        productTypeId: 22,
        productTypeName: 'acessórios para tablets',
        productLineId: 5,
      },
      {
        productTypeId: 23,
        productTypeName: 'outros tipos de tablets',
        productLineId: 5,
      },
      {
        productTypeId: 24,
        productTypeName: 'processadores AMD',
        productLineId: 6,
      },
      {
        productTypeId: 25,
        productTypeName: 'processadores Intel',
        productLineId: 6,
      },
      {
        productTypeId: 26,
        productTypeName: 'outros processadores',
        productLineId: 6,
      },
      {
        productTypeId: 27,
        productTypeName: 'placas de vídeo',
        productLineId: 7,
      },
      {
        productTypeId: 28,
        productTypeName: 'placas de som',
        productLineId: 7,
      },
      {
        productTypeId: 29,
        productTypeName: 'placas de captura',
        productLineId: 7,
      },
      {
        productTypeId: 30,
        productTypeName: 'placas mãe',
        productLineId: 8,
      },
      {
        productTypeId: 31,
        productTypeName: 'DDR3',
        productLineId: 9,
      },
      {
        productTypeId: 32,
        productTypeName: 'DDR4',
        productLineId: 9,
      },
      {
        productTypeId: 33,
        productTypeName: 'DDR5',
        productLineId: 9,
      },
      {
        productTypeId: 34,
        productTypeName: 'memórias para notebook',
        productLineId: 9,
      },
      {
        productTypeId: 35,
        productTypeName: 'outros tipos de memórias internas',
        productLineId: 9,
      },
      {
        productTypeId: 36,
        productTypeName: 'SSDs NVMe',
        productLineId: 10,
      },
      {
        productTypeId: 37,
        productTypeName: 'SSDs SATA III',
        productLineId: 10,
      },
      {
        productTypeId: 38,
        productTypeName: 'HDs SATA III',
        productLineId: 10,
      },
      {
        productTypeId: 39,
        productTypeName: 'HDs IDE',
        productLineId: 10,
      },
      {
        productTypeId: 40,
        productTypeName: 'SSDs externos',
        productLineId: 10,
      },
      {
        productTypeId: 41,
        productTypeName: 'HDs externos',
        productLineId: 10,
      },
      {
        productTypeId: 42,
        productTypeName: 'network-attached storage (NAS)',
        productLineId: 10,
      },
      {
        productTypeId: 43,
        productTypeName: 'flash drives USB',
        productLineId: 10,
      },
      {
        productTypeId: 44,
        productTypeName: 'cartões de memória (SD)',
        productLineId: 10,
      },
      {
        productTypeId: 45,
        productTypeName: 'outros',
        productLineId: 10,
      },
      {
        productTypeId: 46,
        productTypeName: 'fontes de alimentação',
        productLineId: 11,
      },
      {
        productTypeId: 47,
        productTypeName: 'gabinetes',
        productLineId: 12,
      },
      {
        productTypeId: 48,
        productTypeName: 'water cooler',
        productLineId: 13,
      },
      {
        productTypeId: 49,
        productTypeName: 'cooler para CPU',
        productLineId: 13,
      },
      {
        productTypeId: 50,
        productTypeName: 'cooler para gabinete',
        productLineId: 13,
      },
      {
        productTypeId: 51,
        productTypeName: 'outros dispositivos de refrigeração',
        productLineId: 13,
      },
      {
        productTypeId: 52,
        productTypeName: 'monitores tradicionais',
        productLineId: 14,
      },
      {
        productTypeId: 53,
        productTypeName: 'monitores gamers',
        productLineId: 14,
      },
      {
        productTypeId: 54,
        productTypeName: 'placas wifi',
        productLineId: 15,
      },
      {
        productTypeId: 55,
        productTypeName: 'roteadores wireless',
        productLineId: 15,
      },
      {
        productTypeId: 56,
        productTypeName: 'switch',
        productLineId: 15,
      },
      {
        productTypeId: 57,
        productTypeName: 'repetidores wireless',
        productLineId: 15,
      },
      {
        productTypeId: 58,
        productTypeName: 'no-breaks',
        productLineId: 15,
      },
      {
        productTypeId: 59,
        productTypeName: 'estabilizadores',
        productLineId: 15,
      },
      {
        productTypeId: 60,
        productTypeName: 'outros dispositivos de rede e internet',
        productLineId: 15,
      },
      {
        productTypeId: 61,
        productTypeName: 'drives Blu-Ray',
        productLineId: 16,
      },
      {
        productTypeId: 62,
        productTypeName: 'drives DVD-RW',
        productLineId: 16,
      },
      {
        productTypeId: 63,
        productTypeName: 'teclados',
        productLineId: 17,
      },
      {
        productTypeId: 64,
        productTypeName: 'mouses',
        productLineId: 17,
      },
      {
        productTypeId: 65,
        productTypeName: 'mousepads',
        productLineId: 17,
      },
      {
        productTypeId: 66,
        productTypeName: 'webcams',
        productLineId: 17,
      },
      {
        productTypeId: 67,
        productTypeName: 'caixas de som',
        productLineId: 17,
      },
      {
        productTypeId: 68,
        productTypeName: 'headsets',
        productLineId: 17,
      },
      {
        productTypeId: 69,
        productTypeName: 'dongles',
        productLineId: 17,
      },
      {
        productTypeId: 70,
        productTypeName: 'controles para PC gamer',
        productLineId: 17,
      },
      {
        productTypeId: 71,
        productTypeName: 'cabos',
        productLineId: 17,
      },
      {
        productTypeId: 72,
        productTypeName: 'outros periféricos',
        productLineId: 17,
      },
      {
        productTypeId: 73,
        productTypeName: 'impressoras tradicionais',
        productLineId: 18,
      },
      {
        productTypeId: 74,
        productTypeName: 'impressoras 3D',
        productLineId: 18,
      },
      {
        productTypeId: 75,
        productTypeName: 'scanners',
        productLineId: 18,
      },
      {
        productTypeId: 76,
        productTypeName: 'outros',
        productLineId: 18,
      },
      {
        productTypeId: 77,
        productTypeName: 'jogos para PC',
        productLineId: 19,
      },
      {
        productTypeId: 78,
        productTypeName: 'consoles PS5',
        productLineId: 20,
      },
      {
        productTypeId: 79,
        productTypeName: 'jogos para PS5',
        productLineId: 20,
      },
      {
        productTypeId: 80,
        productTypeName: 'acessórios para PS5',
        productLineId: 20,
      },
      {
        productTypeId: 81,
        productTypeName: 'peças de reposição para PS5',
        productLineId: 20,
      },
      {
        productTypeId: 82,
        productTypeName: 'consoles PS4 ou PS4 Pro',
        productLineId: 21,
      },
      {
        productTypeId: 83,
        productTypeName: 'jogos para PS4 ou PS4 Pro',
        productLineId: 21,
      },
      {
        productTypeId: 84,
        productTypeName: 'acessórios para PS4 ou PS4 Pro',
        productLineId: 21,
      },
      {
        productTypeId: 85,
        productTypeName: 'peças de reposição para PS4 ou PS4 Pro',
        productLineId: 21,
      },
      {
        productTypeId: 86,
        productTypeName: 'consoles PS3',
        productLineId: 22,
      },
      {
        productTypeId: 87,
        productTypeName: 'jogos para PS3',
        productLineId: 22,
      },
      {
        productTypeId: 88,
        productTypeName: 'acessórios para PS3',
        productLineId: 22,
      },
      {
        productTypeId: 89,
        productTypeName: 'peças de reposição para PS3',
        productLineId: 22,
      },
      {
        productTypeId: 90,
        productTypeName: 'consoles PS2',
        productLineId: 23,
      },
      {
        productTypeId: 91,
        productTypeName: 'jogos para PS2',
        productLineId: 23,
      },
      {
        productTypeId: 92,
        productTypeName: 'acessórios para PS2',
        productLineId: 23,
      },
      {
        productTypeId: 93,
        productTypeName: 'peças de reposição para PS2',
        productLineId: 23,
      },
      {
        productTypeId: 94,
        productTypeName: 'consoles PSP',
        productLineId: 24,
      },
      {
        productTypeId: 95,
        productTypeName: 'jogos para PSP',
        productLineId: 24,
      },
      {
        productTypeId: 96,
        productTypeName: 'acessórios para PSP',
        productLineId: 24,
      },
      {
        productTypeId: 97,
        productTypeName: 'peças de reposição para PSP',
        productLineId: 24,
      },
      {
        productTypeId: 98,
        productTypeName: 'consoles PSP Vita',
        productLineId: 25,
      },
      {
        productTypeId: 99,
        productTypeName: 'jogos para PSP Vita',
        productLineId: 25,
      },
      {
        productTypeId: 100,
        productTypeName: 'acessórios para PSP Vita',
        productLineId: 25,
      },
      {
        productTypeId: 101,
        productTypeName: 'peças de reposição para PSP Vita',
        productLineId: 25,
      },
      {
        productTypeId: 102,
        productTypeName: 'consoles Xbox Series S ou Xbox Series X',
        productLineId: 26,
      },
      {
        productTypeId: 103,
        productTypeName: 'jogos para Xbox Series S ou Xbox Series X',
        productLineId: 26,
      },
      {
        productTypeId: 104,
        productTypeName: 'acessórios para Xbox Series S ou Xbox Series X',
        productLineId: 26,
      },
      {
        productTypeId: 105,
        productTypeName: 'peças de reposição para Xbox Series S ou Xbox Series X',
        productLineId: 26,
      },
      {
        productTypeId: 106,
        productTypeName: 'consoles Xbox One S ou Xbox One X',
        productLineId: 27,
      },
      {
        productTypeId: 107,
        productTypeName: 'jogos para Xbox One S ou Xbox One X',
        productLineId: 27,
      },
      {
        productTypeId: 108,
        productTypeName: 'acessórios para Xbox One S ou Xbox One X',
        productLineId: 27,
      },
      {
        productTypeId: 109,
        productTypeName: 'peças de reposição para Xbox One S ou Xbox One X',
        productLineId: 27,
      },
      {
        productTypeId: 110,
        productTypeName: 'consoles Xbox 360',
        productLineId: 28,
      },
      {
        productTypeId: 111,
        productTypeName: 'jogos para Xbox 360',
        productLineId: 28,
      },
      {
        productTypeId: 112,
        productTypeName: 'acessórios para Xbox 360',
        productLineId: 28,
      },
      {
        productTypeId: 113,
        productTypeName: 'peças de reposição para Xbox 360',
        productLineId: 28,
      },
      {
        productTypeId: 114,
        productTypeName: 'consoles Xbox',
        productLineId: 29,
      },
      {
        productTypeId: 115,
        productTypeName: 'jogos para Xbox',
        productLineId: 29,
      },
      {
        productTypeId: 116,
        productTypeName: 'acessórios para Xbox',
        productLineId: 29,
      },
      {
        productTypeId: 117,
        productTypeName: 'peças de reposição para Xbox',
        productLineId: 29,
      },
      {
        productTypeId: 118,
        productTypeName: 'consoles Nintendo Switch OLED',
        productLineId: 30,
      },
      {
        productTypeId: 119,
        productTypeName: 'jogos para Nintendo Switch OLED',
        productLineId: 30,
      },
      {
        productTypeId: 120,
        productTypeName: 'acessórios para Nintendo Switch OLED',
        productLineId: 30,
      },
      {
        productTypeId: 121,
        productTypeName: 'peças de reposição para Nintendo Switch OLED',
        productLineId: 30,
      },
      {
        productTypeId: 122,
        productTypeName: 'consoles Nintendo Switch Lite',
        productLineId: 31,
      },
      {
        productTypeId: 123,
        productTypeName: 'jogos para Nintendo Switch Lite',
        productLineId: 31,
      },
      {
        productTypeId: 124,
        productTypeName: 'acessórios para Nintendo Switch Lite',
        productLineId: 31,
      },
      {
        productTypeId: 125,
        productTypeName: 'peças de reposição para Nintendo Switch Lite',
        productLineId: 31,
      },
      {
        productTypeId: 126,
        productTypeName: 'consoles Nintendo Switch v2',
        productLineId: 32,
      },
      {
        productTypeId: 127,
        productTypeName: 'jogos para Nintendo Switch v2',
        productLineId: 32,
      },
      {
        productTypeId: 128,
        productTypeName: 'acessórios para Nintendo Switch v2',
        productLineId: 32,
      },
      {
        productTypeId: 129,
        productTypeName: 'peças de reposição para Nintendo Switch v2',
        productLineId: 32,
      },
      {
        productTypeId: 130,
        productTypeName: 'consoles Nintendo Switch v1',
        productLineId: 33,
      },
      {
        productTypeId: 131,
        productTypeName: 'jogos para Nintendo Switch v1',
        productLineId: 33,
      },
      {
        productTypeId: 132,
        productTypeName: 'acessórios para Nintendo Switch v1',
        productLineId: 33,
      },
      {
        productTypeId: 133,
        productTypeName: 'peças de reposição para Nintendo Switch v1',
        productLineId: 33,
      },
      {
        productTypeId: 134,
        productTypeName: 'consoles Nintendo Wii U',
        productLineId: 34,
      },
      {
        productTypeId: 135,
        productTypeName: 'jogos para Nintendo Wii U',
        productLineId: 34,
      },
      {
        productTypeId: 136,
        productTypeName: 'acessórios para Nintendo Wii U',
        productLineId: 34,
      },
      {
        productTypeId: 137,
        productTypeName: 'peças de reposição para Nintendo Wii U',
        productLineId: 34,
      },
      {
        productTypeId: 138,
        productTypeName: 'consoles Nintendo Wii',
        productLineId: 35,
      },
      {
        productTypeId: 139,
        productTypeName: 'jogos para Nintendo Wii',
        productLineId: 35,
      },
      {
        productTypeId: 140,
        productTypeName: 'acessórios para Nintendo Wii',
        productLineId: 35,
      },
      {
        productTypeId: 141,
        productTypeName: 'peças de reposição para Nintendo Wii',
        productLineId: 35,
      },
      {
        productTypeId: 142,
        productTypeName: 'consoles Nintendo 3DS',
        productLineId: 36,
      },
      {
        productTypeId: 143,
        productTypeName: 'jogos para Nintendo 3DS',
        productLineId: 36,
      },
      {
        productTypeId: 144,
        productTypeName: 'acessórios para Nintendo 3DS',
        productLineId: 36,
      },
      {
        productTypeId: 145,
        productTypeName: 'peças de reposição para Nintendo 3DS',
        productLineId: 36,
      },
      {
        productTypeId: 146,
        productTypeName: 'consoles Retrô',
        productLineId: 37,
      },
      {
        productTypeId: 147,
        productTypeName: 'jogos para consoles Retrô',
        productLineId: 37,
      },
      {
        productTypeId: 148,
        productTypeName: 'acessórios para consoles Retrô',
        productLineId: 37,
      },
      {
        productTypeId: 149,
        productTypeName: 'peças de reposição para consoles Retrô',
        productLineId: 37,
      },
      {
        productTypeId: 150,
        productTypeName: 'smartwatches',
        productLineId: 38,
      },
      {
        productTypeId: 151,
        productTypeName: 'assistentes inteligentes',
        productLineId: 38,
      },
      {
        productTypeId: 152,
        productTypeName: 'lâmpadas inteligentes',
        productLineId: 38,
      },
      {
        productTypeId: 153,
        productTypeName: 'dispositivos inteligentes para monitoramento físico',
        productLineId: 38,
      },
      {
        productTypeId: 154,
        productTypeName: 'dispositivos inteligentes para monitoramento de saúde',
        productLineId: 38,
      },
      {
        productTypeId: 155,
        productTypeName: 'dispositivos inteligentes para segurança',
        productLineId: 38,
      },
      {
        productTypeId: 156,
        productTypeName: 'dispositivos inteligentes domiciliares',
        productLineId: 38,
      },
      {
        productTypeId: 157,
        productTypeName: 'robôs aspiradores de pó',
        productLineId: 38,
      },
      {
        productTypeId: 158,
        productTypeName: 'babás eletrônicas',
        productLineId: 38,
      },
      {
        productTypeId: 159,
        productTypeName: 'outros dispositivos inteligentes',
        productLineId: 38,
      },
      {
        productTypeId: 160,
        productTypeName: 'LCD',
        productLineId: 39,
      },
      {
        productTypeId: 161,
        productTypeName: 'LED',
        productLineId: 39,
      },
      {
        productTypeId: 162,
        productTypeName: 'OLED',
        productLineId: 39,
      },
      {
        productTypeId: 163,
        productTypeName: 'QLED',
        productLineId: 39,
      },
      {
        productTypeId: 164,
        productTypeName: 'MicroLED',
        productLineId: 39,
      },
      {
        productTypeId: 165,
        productTypeName: 'outras TVs e smart TVs',
        productLineId: 39,
      },
      {
        productTypeId: 166,
        productTypeName: 'Amazon Fire TV',
        productLineId: 40,
      },
      {
        productTypeId: 167,
        productTypeName: 'Apple TV',
        productLineId: 40,
      },
      {
        productTypeId: 168,
        productTypeName: 'Roku Express',
        productLineId: 40,
      },
      {
        productTypeId: 169,
        productTypeName: 'Xiaomi Mi TV',
        productLineId: 40,
      },
      {
        productTypeId: 170,
        productTypeName: 'Google Chromecast',
        productLineId: 40,
      },
      {
        productTypeId: 171,
        productTypeName: 'outros dispositivos de streaming de mídia',
        productLineId: 40,
      },
      {
        productTypeId: 172,
        productTypeName: 'projetores',
        productLineId: 41,
      },
      {
        productTypeId: 173,
        productTypeName: 'retrôprojetores',
        productLineId: 41,
      },
      {
        productTypeId: 174,
        productTypeName: 'telas',
        productLineId: 41,
      },
      {
        productTypeId: 175,
        productTypeName: 'DVD e Blu-Ray players',
        productLineId: 41,
      },
      {
        productTypeId: 176,
        productTypeName: 'outros dispositivos de vídeo',
        productLineId: 41,
      },
      {
        productTypeId: 177,
        productTypeName: 'headphones',
        productLineId: 42,
      },
      {
        productTypeId: 178,
        productTypeName: 'earbuds',
        productLineId: 42,
      },
      {
        productTypeId: 179,
        productTypeName: 'caixas de som',
        productLineId: 42,
      },
      {
        productTypeId: 180,
        productTypeName: 'home theaters',
        productLineId: 42,
      },
      {
        productTypeId: 181,
        productTypeName: 'mini system',
        productLineId: 42,
      },
      {
        productTypeId: 182,
        productTypeName: 'amplificadores e receivers',
        productLineId: 42,
      },
      {
        productTypeId: 183,
        productTypeName: 'interface de áudio',
        productLineId: 42,
      },
      {
        productTypeId: 184,
        productTypeName: 'divisores de frequência',
        productLineId: 42,
      },
      {
        productTypeId: 185,
        productTypeName: 'DJ decks e DJ mixers',
        productLineId: 42,
      },
      {
        productTypeId: 186,
        productTypeName: 'controladores MIDI',
        productLineId: 42,
      },
      {
        productTypeId: 187,
        productTypeName: 'unidade de efeitos',
        productLineId: 42,
      },
      {
        productTypeId: 188,
        productTypeName: 'equalizadores',
        productLineId: 42,
      },
      {
        productTypeId: 189,
        productTypeName: 'microfones e pré amplificadores',
        productLineId: 42,
      },
      {
        productTypeId: 190,
        productTypeName: 'Ipods',
        productLineId: 42,
      },
      {
        productTypeId: 191,
        productTypeName: 'outros dispositivos de áudio',
        productLineId: 42,
      },
      {
        productTypeId: 192,
        productTypeName: 'câmeras',
        productLineId: 43,
      },
      {
        productTypeId: 193,
        productTypeName: 'acessórios para câmeras',
        productLineId: 43,
      },
      {
        productTypeId: 194,
        productTypeName: 'outros',
        productLineId: 43,
      },
      {
        productTypeId: 195,
        productTypeName: 'drones',
        productLineId: 44,
      },
      {
        productTypeId: 196,
        productTypeName: 'acessórios para drones',
        productLineId: 44,
      },
      {
        productTypeId: 197,
        productTypeName: 'outros',
        productLineId: 44,
      },
      {
        productTypeId: 198,
        productTypeName: 'patinetes elétricos',
        productLineId: 45,
      },
      {
        productTypeId: 199,
        productTypeName: 'skates elétricos',
        productLineId: 45,
      },
      {
        productTypeId: 200,
        productTypeName: 'bicicletas elétricas',
        productLineId: 45,
      },
      {
        productTypeId: 201,
        productTypeName: 'scooters elétricas',
        productLineId: 45,
      },
      {
        productTypeId: 202,
        productTypeName: 'monociclo elétrico',
        productLineId: 45,
      },
      {
        productTypeId: 203,
        productTypeName: 'outros veículos elétricos leves',
        productLineId: 45,
      },
      {
        productTypeId: 204,
        productTypeName: 'consoles emuladores',
        productLineId: 46,
      },
      {
        productTypeId: 205,
        productTypeName: 'acessórios para emuladores',
        productLineId: 46,
      },
      {
        productTypeId: 206,
        productTypeName: 'peças de reposição para emuladores',
        productLineId: 46,
      },
      {
        productTypeId: 207,
        productTypeName: 'consoles Steam Deck',
        productLineId: 47,
      },
      {
        productTypeId: 208,
        productTypeName: 'acessórios para Steam Deck',
        productLineId: 47,
      },
      {
        productTypeId: 209,
        productTypeName: 'peças de reposição para Steam Deck',
        productLineId: 47,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ProductType', null, {});
  },
};