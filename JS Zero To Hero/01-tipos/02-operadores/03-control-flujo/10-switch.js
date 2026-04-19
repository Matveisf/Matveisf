let accion = 'listar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;
    case 'agregar':
        console.log('Accion de guardar');
        break;
    case 'editar':
        console.log('Accion no reconocida');
        break;
   default:      
    console.log('Accion no reconocida');
}