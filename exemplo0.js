// function getUserRole(role) {
//   if (role === "admin") {
//     return "Tem acesso total";
//   } else if (role === "editor") {
//     return "Pode editar conteúdos";
//   } else if (role === "viewer") {
//     return "Apenas leitura";
//   } else if (role === "guest") {
//     return "Visitante sem acesso";
//   } else {
//     return "Função desconhecida";
//   }
// }

// refatoração com HashMap:
function getUserRole(role) {
  const roles = {
    admin: "Tem acesso total",
    editor: "Pode editar conteúdos",
    viewer: "Apenas leitura",
    guest: "Visitante sem acesso"
  }
  const userRole = roles[role];
  if (userRole === undefined) {
    return "Função desconhecida";
  }
  return userRole;
}

console.log(getUserRole("guest1"))