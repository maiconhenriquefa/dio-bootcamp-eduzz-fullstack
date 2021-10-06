interface IUsuario {
  id: string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervidos' | 'funcionário';
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // redirecionar(usuario.cargo)
  }
  // redirecionar para a área de usuário
}