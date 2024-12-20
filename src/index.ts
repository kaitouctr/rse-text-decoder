//! SPDX-License-Identifier: MIT

const japaneseMap = new Map([
    [0x0, "　"], 
    [0x1, "あ"], [0x2, "い"], [0x3, "う"], [0x4, "え"], [0x5, "お"], 
    [0x6, "か"], [0x7, "き"], [0x8, "く"], [0x9, "け"], [0xa, "こ"], 
    [0xb, "さ"], [0xc, "し"], [0xd, "す"], [0xe, "せ"], [0xf, "そ"], 
    [0x10, "た"], [0x11, "ち"], [0x12, "つ"], [0x13, "て"], [0x14, "と"], 
    [0x15, "な"], [0x16, "に"], [0x17, "ぬ"], [0x18, "ね"], [0x19, "の"], 
    [0x1a, "は"], [0x1b, "ひ"], [0x1c, "ふ"], [0x1d, "へ"], [0x1e, "ほ"], 
    [0x1f, "ま"], [0x20, "み"], [0x21, "む"], [0x22, "め"], [0x23, "も"], 
    [0x24, "や"], [0x25, "ゆ"], [0x26, "よ"], 
    [0x27, "ら"], [0x28, "り"], [0x29, "る"], [0x2a, "れ"], [0x2b, "ろ"], 
    [0x2c, "わ"], [0x2d, "を"], [0x2e, "ん"], 
    [0x2f, "ぁ"], [0x30, "ぃ"], [0x31, "ぅ"], [0x32, "ぇ"], [0x33, "ぉ"], 
    [0x34, "ゃ"], [0x35, "ゅ"], [0x36, "ょ"],
    [0x37, "が"], [0x38, "ぎ"], [0x39, "ぐ"], [0x3a, "げ"], [0x3b, "ご"],
    [0x3c, "ざ"], [0x3d, "じ"], [0x3e, "ず"], [0x3f, "ぜ"], [0x40, "ぞ"],
    [0x41, "だ"], [0x42, "ぢ"], [0x43, "づ"], [0x44, "で"], [0x45, "ど"],
    [0x46, "ば"], [0x47, "び"], [0x48, "ぶ"], [0x49, "べ"], [0x4a, "ぼ"],
    [0x4b, "ぱ"], [0x4c, "ぴ"], [0x4d, "ぷ"], [0x4e, "ぺ"], [0x4f, "ぽ"],
    [0x50, "っ"],
    [0x51, "ア"], [0x52, "イ"], [0x53, "ウ"], [0x54, "エ"], [0x55, "オ"],
    [0x56, "カ"], [0x57, "キ"], [0x58, "ク"], [0x59, "ケ"], [0x5a, "コ"],
    [0x5b, "サ"], [0x5c, "シ"], [0x5d, "ス"], [0x5e, "セ"], [0x5f, "ソ"],
    [0x60, "タ"], [0x61, "チ"], [0x62, "ツ"], [0x63, "テ"], [0x64, "ト"],
    [0x65, "ナ"], [0x66, "ニ"], [0x67, "ヌ"], [0x68, "ネ"], [0x69, "ノ"],
    [0x6a, "ハ"], [0x6b, "ヒ"], [0x6c, "フ"], [0x6d, "ヘ"], [0x6e, "ホ"],
    [0x6f, "マ"], [0x70, "ミ"], [0x71, "ム"], [0x72, "メ"], [0x73, "モ"],
    [0x74, "ヤ"], [0x75, "ユ"], [0x76, "ヨ"],
    [0x77, "ラ"], [0x78, "リ"], [0x79, "ル"], [0x7a, "レ"], [0x7b, "ロ"],
    [0x7c, "ワ"], [0x7d, "ヲ"], [0x7e, "ン"],
    [0x7f, "ァ"], [0x80, "ィ"], [0x81, "ゥ"], [0x82, "ェ"], [0x83, "ォ"],
    [0x84, "ャ"], [0x85, "ュ"], [0x86, "ョ"],
    [0x87, "ガ"], [0x88, "ギ"], [0x89, "グ"], [0x8a, "ゲ"], [0x8b, "ゴ"],
    [0x8c, "ザ"], [0x8d, "ジ"], [0x8e, "ズ"], [0x8f, "ゼ"], [0x90, "ゾ"],
    [0x91, "ダ"], [0x92, "ヂ"], [0x93, "ヅ"], [0x94, "デ"], [0x95, "ド"],
    [0x96, "バ"], [0x97, "ビ"], [0x98, "ブ"], [0x99, "ベ"], [0x9a, "ボ"],
    [0x9b, "パ"], [0x9c, "ピ"], [0x9d, "プ"], [0x9e, "ペ"], [0x9f, "ポ"],
    [0xa0, "ッ"],
    [0xa1, "0"],
    [0xa2, "1"], [0xa3, "2"], [0xa4, "3"],
    [0xa5, "4"], [0xa6, "5"], [0xa7, "6"],
    [0xa8, "7"], [0xa9, "8"], [0xaa, "9"],
    [0xab, "！"], [0xac, "？"],
    [0xad, "。"], [0xae, "ー"], [0xaf, "・"], [0xb0, "‥"],
    [0xb1, "『"], [0xb2, "』"], [0xb3, "「"], [0xb4, "」"],
    [0xb5, "♂"], [0xb6, "♀"],
    [0xb7, "¥"], [0xb8, "."], [0xb9, "×"],
    [0xba, "／"],
    [0xbb, "A"], [0xbc, "B"], [0xbd, "C"], [0xbe, "D"], [0xbf, "E"], [0xc0, "F"],
    [0xc1, "G"], [0xc2, "H"], [0xc3, "I"], [0xc4, "J"], [0xc5, "K"], [0xc6, "L"],
    [0xc7, "M"], [0xc8, "N"], [0xc9, "O"], [0xca, "P"], [0xcb, "Q"], [0xcc, "R"],
    [0xcd, "S"], [0xce, "T"], [0xcf, "U"], [0xd0, "V"], [0xd1, "W"], [0xd2, "X"],
    [0xd3, "Y"], [0xd4, "Z"],
    [0xd5, "a"], [0xd6, "b"], [0xd7, "c"], [0xd8, "d"], [0xd9, "e"], [0xda, "f"],
    [0xdb, "g"], [0xdc, "h"], [0xdd, "i"], [0xde, "j"], [0xdf, "k"], [0xe0, "l"],
    [0xe1, "m"], [0xe2, "n"], [0xe3, "o"], [0xe4, "p"], [0xe5, "q"], [0xe6, "r"],
    [0xe7, "s"], [0xe8, "t"], [0xe9, "u"], [0xea, "v"], [0xeb, "w"], [0xec, "x"],
    [0xed, "y"], [0xee, "z"],
    [0xef, "►"], [0xf0, ":"],
    [0xf1, "Ä"], [0xf2, "Ö"], [0xf3, "Ü"],
    [0xf4, "ä"], [0xf5, "ö"], [0xf6, "ü"],
    [0xf7, "↑"], [0xf8, "↓"], [0xf9, "←"],
    [0xfa, "▼"], [0xfb, "▾"], [0xfc, "^"], [0xfd, "␛"], [0xfe, "␤"],
    [0xff, "␃"]
]) as ReadonlyMap<number, string>

const englishMap = new Map([
    [0x0, " "], [0x1, "À"], [0x2, "Á"], [0x3, "Â"], [0x4, "Ç"],
    [0x5, "È"], [0x6, "É"], [0x7, "Ê"], [0x8, "Ë"], [0x9, "Ì"],
    [0xa, "こ"], [0xb, "Î"], [0xc, "Ï"], [0xd, "Ò"], [0xe, "Ó"],
    [0xf, "Ô"], [0x10, "Œ"], [0x11, "Ù"], [0x12, "Ú"], [0x13, "Û"],
    [0x14, "Ñ"], [0x15, "ß"], [0x16, "à"], [0x17, "á"], [0x18, "ね"],
    [0x19, "ç"], [0x1a, "è"], [0x1b, "é"], [0x1c, "ê"], [0x1d, "ë"],
    [0x1e, "ì"], [0x1f, "ま"], [0x20, "î"], [0x21, "ï"], [0x22, "ò"],
    [0x23, "ó"], [0x24, "ô"], [0x25, "œ"], [0x26, "ù"], [0x27, "ú"],
    [0x28, "û"], [0x29, "ñ"], [0x2a, "º"], [0x2b, "ª"], [0x2c, "わ"],
    [0x2d, "&"], [0x2e, "+"], [0x2f, "ぁ"], [0x30, "ぃ"], [0x31, "ぅ"],
    [0x32, "ぇ"], [0x33, "ぉ"], [0x34, "ゃ"], [0x35, "="], [0x36, ";"],
    [0x37, "が"], [0x38, "ぎ"], [0x39, "ぐ"], [0x3a, "げ"], [0x3b, "ご"],
    [0x3c, "ざ"], [0x3d, "じ"], [0x3e, "ず"], [0x3f, "ぜ"], [0x40, "ぞ"],
    [0x41, "だ"], [0x42, "ぢ"], [0x43, "づ"], [0x44, "で"], [0x45, "ど"],
    [0x46, "ば"], [0x47, "び"], [0x48, "ぶ"], [0x49, "べ"], [0x4a, "ぼ"],
    [0x4b, "ぱ"], [0x4c, "ぴ"], [0x4d, "ぷ"], [0x4e, "ぺ"], [0x4f, "ぽ"],
    [0x50, "▯"], [0x51, "¿"], [0x52, "¡"], [0x53, "ウ"], [0x54, "エ"],
    [0x55, "オ"], [0x56, "カ"], [0x57, "キ"], [0x58, "ク"], [0x59, "ケ"],
    [0x5a, "Í"], [0x5b, "%"], [0x5c, "("], [0x5d, ")"], [0x5e, "セ"],
    [0x5f, "ソ"], [0x60, "タ"], [0x61, "チ"], [0x62, "ツ"], [0x63, "テ"],
    [0x64, "ト"], [0x65, "ナ"], [0x66, "ニ"], [0x67, "ヌ"], [0x68, "â"],
    [0x69, "ノ"], [0x6a, "ハ"], [0x6b, "ヒ"], [0x6c, "フ"], [0x6d, "ヘ"],
    [0x6e, "ホ"], [0x6f, "í"], [0x70, "ミ"], [0x71, "ム"], [0x72, "メ"],
    [0x73, "モ"], [0x74, "ヤ"], [0x75, "ユ"], [0x76, "ヨ"], [0x77, "ラ"],
    [0x78, "リ"], [0x79, "↑"], [0x7a, "↓"], [0x7b, "←"], [0x7c, "→"],
    [0x7d, "ヲ"], [0x7e, "ン"], [0x7f, "ァ"], [0x80, "ィ"], [0x81, "ゥ"],
    [0x82, "ェ"], [0x83, "ォ"], [0x84, "ᵉ"], [0x85, "<"], [0x86, ">"],
    [0x87, "ガ"], [0x88, "ギ"], [0x89, "グ"], [0x8a, "ゲ"], [0x8b, "ゴ"],
    [0x8c, "ザ"], [0x8d, "ジ"], [0x8e, "ズ"], [0x8f, "ゼ"], [0x90, "ゾ"],
    [0x91, "ダ"], [0x92, "ヂ"], [0x93, "ヅ"], [0x94, "デ"], [0x95, "ド"],
    [0x96, "バ"], [0x97, "ビ"], [0x98, "ブ"], [0x99, "ベ"], [0x9a, "ボ"],
    [0x9b, "パ"], [0x9c, "ピ"], [0x9d, "プ"], [0x9e, "ペ"], [0x9f, "ポ"],
    [0xa0, "ッ"], [0xa1, "0"], [0xa2, "1"], [0xa3, "2"], [0xa4, "3"],
    [0xa5, "4"], [0xa6, "5"], [0xa7, "6"], [0xa8, "7"], [0xa9, "8"],
    [0xaa, "9"], [0xab, "!"], [0xac, "?"], [0xad, "."], [0xae, "-"],
    [0xaf, "・"], [0xb0, "‥"], [0xb1, "“"], [0xb2, "”"], [0xb3, "‘"],
    [0xb4, "’"], [0xb5, "♂"], [0xb6, "♀"], [0xb7, "$"], [0xb8, ","],
    [0xb9, "×"], [0xba, "/"], [0xbb, "A"], [0xbc, "B"], [0xbd, "C"],
    [0xbe, "D"], [0xbf, "E"], [0xc0, "F"], [0xc1, "G"], [0xc2, "H"],
    [0xc3, "I"], [0xc4, "J"], [0xc5, "K"], [0xc6, "L"], [0xc7, "M"],
    [0xc8, "N"], [0xc9, "O"], [0xca, "P"], [0xcb, "Q"], [0xcc, "R"],
    [0xcd, "S"], [0xce, "T"], [0xcf, "U"], [0xd0, "V"], [0xd1, "W"],
    [0xd2, "X"], [0xd3, "Y"], [0xd4, "Z"], [0xd5, "a"], [0xd6, "b"],
    [0xd7, "c"], [0xd8, "d"], [0xd9, "e"], [0xda, "f"], [0xdb, "g"],
    [0xdc, "h"], [0xdd, "i"], [0xde, "j"], [0xdf, "k"], [0xe0, "l"],
    [0xe1, "m"], [0xe2, "n"], [0xe3, "o"], [0xe4, "p"], [0xe5, "q"],
    [0xe6, "r"], [0xe7, "s"], [0xe8, "t"], [0xe9, "u"], [0xea, "v"],
    [0xeb, "w"], [0xec, "x"], [0xed, "y"], [0xee, "z"], [0xef, "►"],
    [0xf0, ":"], [0xf1, "Ä"], [0xf2, "Ö"], [0xf3, "Ü"], [0xf4, "ä"],
    [0xf5, "ö"], [0xf6, "ü"], [0xf7, "⇑"], [0xf8, "⇓"], [0xf9, "⇐"],
    [0xfa, "▼"], [0xfb, "▾"], [0xfc, "^"], [0xfd, "␛"], [0xfe, "␤"],
    [0xff, "␃"]
]) as ReadonlyMap<number, string>


const replaceChars = (characterMap: ReadonlyMap<number, string>, regionalChars: [number, string][]) => {
    const temp = new Map(characterMap);
    for (const assignment of regionalChars)
        temp.set(assignment[0], assignment[1]);
    return temp;
}

const reverseCharacterMap = (map: ReadonlyMap<number, string>) => {
    const temp: Map<string, number> = new Map();
    for (const [k, v] of map)
        temp.set(v, k);
    return temp as ReadonlyMap<string, number>;
}

const frenchMap: ReadonlyMap<number, string> = replaceChars(englishMap, [[0xb1, "«"], [0xb2, "»"]]);
const germanMap: ReadonlyMap<number, string> = replaceChars(englishMap, [[0xb1, "„"], [0xb2, "“"]]);

const characterMaps = new Map([
    ["JPN", japaneseMap],
    ["ENG", englishMap],
    ["FRA", frenchMap],
    ["GER", germanMap]
]) as ReadonlyMap<string, ReadonlyMap<number, string>>

const reverseCharacterMaps = new Map([
    ["JPN", reverseCharacterMap(japaneseMap)],
    ["ENG", reverseCharacterMap(englishMap)],
    ["FRA", reverseCharacterMap(frenchMap)],
    ["GER", reverseCharacterMap(germanMap)]
]) as ReadonlyMap<string, ReadonlyMap<string, number>>

const charSubstitutionMap = new Map([
    ["JPN", new Map([
        [" ", "　"], ["!", "！"], ["?", "？"], ["…", "‥"],
        ["-", "ー"],["–", "ー"]
    ])],
    ["ENG", new Map([
        ["…", "‥"], ["–", "ー"]
    ])],
    ["FRA", new Map([
        ["…", "‥"], ["–", "ー"]
    ])],
    ["GER", new Map([
        ["…", "‥"], ["–", "ー"]
    ])]
])

function substituteChar(char: string, lang: string) {
    const mapUsed = charSubstitutionMap.get(lang);
    if (mapUsed && mapUsed.has(char)) return mapUsed.get(char)!;
    return char;
}

function getCharacterMap(lang: string) {
    const mapUsed = characterMaps.get(lang)
    if (mapUsed) return mapUsed
    throw new Error("Invalid language was selected");
}

function getReverseCharacterMap(lang: string) {
    const reverseUsed = reverseCharacterMaps.get(lang)
    if (reverseUsed) return reverseUsed
    throw new Error("Invalid language was selected");
}

const boxNamesEntry = document.getElementById("boxNamesInput") as HTMLFieldSetElement;
const rawDataView = document.getElementById('rawDataOutput') as HTMLTextAreaElement;
const thumbView = document.getElementById('thumbOutput') as HTMLTextAreaElement;
const armView = document.getElementById('armOutput') as HTMLTextAreaElement;
const readLang = () => {
    const langSelect = document.getElementById('lang');
    if (langSelect) return (langSelect as HTMLSelectElement).value;
    else throw new Error("Unset language");
}
const boxInputs: [HTMLLabelElement, HTMLInputElement][] = [];

const addFFPadding = (data: Array<number>, targetLength: number) => {
    const remainder = data.length % targetLength;
    const neededPadding = (targetLength - remainder) % targetLength;
    return Array(neededPadding).fill(0xFF) as number[];
}

const writeOpcodeDisplay = (opcodes: number[], opcodeLength: number) => {
    const output = opcodes.map(opcode => opcode.toString(16).padStart(opcodeLength));
    return output.join('\n');
}

const readOpcodes = (rawData: number[], opcodeLength: number) => {
    const data = rawData.concat(addFFPadding(rawData, opcodeLength))
    const opcodes: number[] = [];
    for (let i = 0;
        i < data.length;
        i += opcodeLength) {
        const rawOpcode = data.slice(i, i + opcodeLength);
        const opcode = rawOpcode.reduce((partialOpcode, byte, i) => partialOpcode | byte << (8 * i))
        opcodes.push(opcode >>> 0);
    }
    return opcodes;
}

function addBox() {
    const frag = new DocumentFragment;
    const boxLabel = document.createElement("label");
    const boxEntry = document.createElement("input");
    const boxID = `box${boxInputs.length + 1}Entry`
    boxLabel.htmlFor = boxID;
    boxLabel.innerText = `Box ${boxInputs.length + 1}:`
    frag.appendChild(boxLabel);
    boxEntry.id = boxID;
    boxEntry.type = "text";
    boxEntry.maxLength = 9;
    boxEntry.spellcheck = false;
    frag.appendChild(boxEntry);
    boxInputs.push([boxLabel, boxEntry]);
    boxNamesEntry.appendChild(frag);
};

addBox();

(document.getElementById("addBoxButton") as HTMLButtonElement).addEventListener('click', function() {
    addBox();
    if (boxInputs.length >= 14) this.disabled = true;
    if (boxInputs.length > 1) (document.getElementById("removeBoxButton") as HTMLButtonElement).disabled = false;
});
(document.getElementById("removeBoxButton") as HTMLButtonElement).addEventListener('click', function() {
    const removedInput = boxInputs.pop()
    if (!removedInput) return;
    for (const element of removedInput) boxNamesEntry.removeChild(element);
    if (boxInputs.length <= 1) this.disabled = true;
    if (boxInputs.length < 14) (document.getElementById("addBoxButton") as HTMLButtonElement).disabled = false;
});

(document.getElementById("convertButton") as HTMLButtonElement).addEventListener('click', _ => {
        const readInput = () => {
            const inputData = boxInputs.map((inputPair) => inputPair[1]).map((input) => input.value)
            const charMap = getReverseCharacterMap(readLang())
            const outputData: number[] = [];
            for (const line of inputData) {
                outputData.push(...addFFPadding(outputData, 9));
                outputData.push(...[...line].map(char => substituteChar(char, readLang())).map(char => {
                    const mapping = charMap.get(char);
                    if (mapping) return mapping
                    else throw new Error("Invalid characters in input")
                }))
                if (line.length === 0) outputData.push(...(new Uint8Array(9).fill(0xFF)))
            }
            return outputData;
        }
        let boxNames: number[];
        try {
            boxNames = readInput();
        } catch(e) {
            alert("Invalid characters was entered");
            return;
        }
        const writeRawDataDisplay = (data: number[]) => {
            const lines: number[][] = [];
            for (let i = 0; i < data.length; i += 9) lines.push(data.slice(i, i + 9));
            return lines.map(line => line.map(char => char.toString(16).padStart(2, '0')).join(' ')).join('\n')
        }
        const rawData = boxNames.concat(addFFPadding(boxNames, 9))
        const thumbData = readOpcodes(boxNames, 2);
        const armData = readOpcodes(boxNames, 4);
        rawDataView.value = writeRawDataDisplay(rawData);
        thumbView.value = writeOpcodeDisplay(thumbData, 4);
        armView.value = writeOpcodeDisplay(armData, 8);
});
