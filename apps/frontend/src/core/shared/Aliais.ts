

export default class Aliais {
    static formatar(valor: string): string {
    return valor.replace(/ /g, "-").toLowerCase();
    }
}