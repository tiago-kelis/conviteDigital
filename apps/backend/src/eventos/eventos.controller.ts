/* eslint-disable prettier/prettier */


import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { complementarConvidado, complementarEvento, Convidado, Data, Evento, Id } from 'core';
import { EventoPrisma } from './evento.prisma';


@Controller('eventos')
export class EventosController {

    constructor(readonly repo: EventoPrisma) {}

    async salvarEvento(@Body() evento: Evento) {
        const eventoCadastrado = await this.repo.buscarPorAlias(evento.alias);
        if(eventoCadastrado && eventoCadastrado.id !== evento.id) {
            throw new HttpException("Já existe um evento com esse alias!", 400);
        }

        const eventoCompleto = complementarEvento(this.desiserialize(evento));
       await this.repo.salvar(eventoCompleto);
    }

    @Post(":alias/convidado")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async salvarConvidado(@Param("alias") alias: string, @Body() convidado: Convidado) {
        const evento = await this.repo.buscarPorAlias(alias);
        if(!evento) {
            throw new Error("Evento não encontrado!");
        }

        const convidadoCompleto = complementarConvidado(convidado);
        await this.repo.salvarConvidado(evento, convidadoCompleto);     

    }

    @Post("acessar")
    async acessarEvento(@Body() dados: {id: string, senha: string}) {
        const evento = await this.repo.buscarPorId(dados.id);

        if(!evento) {
            throw new HttpException("Evento não encontrado!", 400);
        }

        if(evento.senha !== dados.senha) {
            throw new HttpException("A Senha não corresponde ao evento!", 400);
        }

        return this.serealizar(evento);
    }
    


    @Get()
    async buscarEventos() {
        const eventos = await this.repo.buscarTodos();
        return eventos.map(this.serealizar);
    }

    @Get(":idOuAlias")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async buscarEvento(@Param("idOuAlias") idouAlias: string) {

        let evento: Evento;
        if(Id.validar(idouAlias)) {
            evento = await this.repo.buscarPorId(idouAlias, true);
        }else {
           evento = await this.repo.buscarPorAlias(idouAlias, true);
        }
        return this.serealizar(evento);
    }

    @Get("validar/:alias/:id")
    async validarAlias(@Param("alias") alias: string, @Param("id") id: string) {
        const evento = await this.repo.buscarPorAlias(alias);
        return{ valido: !evento || evento.id === id};
    }

    private serealizar(evento: Evento) {
        if(!evento) return null;
        return {
            ...evento,
            data: Data.formatar(evento.data),
        };
    }

    private desiserialize(evento: any): Evento {
        if(!evento) return null;
        return {
            ...evento,
            data: Data.desformatar(evento.data),
        };
    }
}
