import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

	//Para poder navegar a otra seccion podemos usar el custon hook useNavigate, desarrollado por react-router-dom.
	const navigate = useNavigate();
	//Aca podemos usar el contexto para obtener el usuario. El cpntexto puede ser utilizado en todo los componentes hijo.
	const {user, logout} = useContext(AuthContext);

	const onLogOut = () => {
		//para hacer navegacion podemos hacer lo siguiente, el primer parametro es el to y el segundo son las opciones
		//El replace evita que la persona pueda regresar a la ruta anterior, por ejemplo si nos deslogueamos no podemos permitir que la persona vuelva atras
		logout();
		navigate('/login', {
			replace: true,
		});
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
				
			<Link 
				className="navbar-brand" 
				to="/"
			>
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">

					<NavLink 
						className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink 
						className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
						to="/dc"
					>
						DC
					</NavLink>

					<NavLink 
						className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className='nav-item nav-link text-info'>
						{user?.name}
					</span>

					<button 
						className='nav-item nav-link btn'
						onClick={onLogOut}>
							Logout
					</button>
				</ul>
			</div>
		</nav>
	)
}