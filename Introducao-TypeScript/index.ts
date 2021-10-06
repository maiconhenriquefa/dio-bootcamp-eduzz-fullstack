// types: para junçõe ou separações de interfaces
// interfaces: definir contratos deestrutura de dados, de classe

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean,
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico ={
  nome: 'Elefante',
  tipo: "terrestre",
  domestico: false,
  porte: "grande",
}