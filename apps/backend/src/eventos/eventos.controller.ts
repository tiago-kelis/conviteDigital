/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Data, Evento, eventos } from 'core';

@Controller('eventos')
export class EventosController {
    @Get()
    async buscarEventos() {
        return eventos.map(this.serealizar);
    }

    private serealizar(evento: Evento) {
        return {
            ...evento,
            data: Data.formatar(evento.data),
        };
    }

    private desiserialize(evento: any): Evento {
        return {
            ...evento,
            data: Data.desformatar(evento.data),
        };
    }
}
