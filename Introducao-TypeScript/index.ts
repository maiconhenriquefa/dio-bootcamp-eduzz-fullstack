// types: similar a propriedade, mas definindo o tipo.
// interfaces: similar ao conceito de classes.

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean,
}

const animal: IAnimal ={
  nome: 'Elefante',
  tipo: "terrestre",
}

const felino: IFelino ={
  nome: 'Leão',
  tipo: "terrestre",
  visaoNoturna: true,
}