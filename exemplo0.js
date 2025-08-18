function getUserRole(role) {
  if (role === "admin") {
    return "Tem acesso total";
  } else if (role === "editor") {
    return "Pode editar conteúdos";
  } else if (role === "viewer") {
    return "Apenas leitura";
  } else if (role === "guest") {
    return "Visitante sem acesso";
  } else {
    return "Função desconhecida";
  }
}

// refatoração com HashMap:
