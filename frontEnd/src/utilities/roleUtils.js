export const getRoleName = (roleId) => {
  const roleMap = {
    1: 'Administrador',
    2: 'Usuario',
    3: 'Moderador',
  }
  return roleMap[roleId]
}
