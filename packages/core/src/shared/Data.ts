/* eslint-disable @typescript-eslint/no-unused-vars */


export default class Data {
    static formatar(data: Date): string {
        const pad = (n: number) => n.toString().padStart(2, "0");

        // Verifica se a data foi fornecida, caso contrário usa a data atual
        const d = data ?? new Date();
        const ano = d.getFullYear();
        const mes = pad(d.getMonth() + 1);
        const dia = pad(d.getDate());
        const hora = pad(d.getHours());
        const min = pad(d.getMinutes());

        return `${ano}-${mes}-${dia}T${hora}:${min}`;        
    }

    static desformatar(data: string): Date {

        const [ano, mes, dia] = data.split("T")[0].split("-");
        const [hora, mim] = data.split("T")[1].split(":");

        return new Date(
            parseInt(ano),
            parseInt(mes) - 1,
            parseInt(dia),
            parseInt(hora),
            parseInt(mim)
        )
    }
}




