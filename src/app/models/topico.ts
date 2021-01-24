import { RespostaListagem } from './resposta';
export class TopicoListagem {
    id: number;
    titulo: string;
    mensagem: string;
    dataCriacao: Date;
}

export class Topico extends TopicoListagem {
    nomeAutor: string;
    status: string;
    respostas: RespostaListagem[];
}