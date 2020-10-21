'use strict';

function mostrarCategoria(cat,subcat)
{
	switch(cat)
	{
		case 0:
			document.getElementById('inner').innerHTML = "Categoria: Electro, subcategoria: "+subcat;
			break;
		case 1:
			document.getElementById('inner').innerHTML ="Categoria: Dormitorio, subcategoria: "+subcat;
			break;
		case 2:
			document.getElementById('inner').innerHTML ="Categoria: Mujer, subcategoria:  "+subcat;
			break;
		case 3:
			document.getElementById('inner').innerHTML ="Categoria: Hombre, subcategoria: "+subcat;
			break;
		case 4:
			document.getElementById('inner').innerHTML ="Categoria: Hombre, subcategoria: zapatos, item: "+subcat;	
			break;
	}
}