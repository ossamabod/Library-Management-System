import React from 'react'

function Menu() {
    return (
    <>
               
                <div id="sidebar" className="bg-white shadow-md w-64 p-4 h-screen fixed lg:static inset-0 lg:block hidden z-50">
                  
                    <div className="mb-2">
                        <div className="flex justify-between items-center cursor-pointer">
                            <a href="#" className="block p-2 rounded text-lg font-semibold pl-0">Tableau de Bord</a>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center cursor-pointer" id="menu1-header">
                            <h2 className="text-lg font-semibold">Livres</h2>
                            <button className="text-gray-600 focus:outline-none focus:ring-0 border-0"><i className="fas fa-chevron-right"></i></button>
                        </div>
                        <ul className="transition-all duration-300 max-h-0 overflow-hidden pl-4" id="menu1-content">
                            <li>
                                <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-800">liste des livres</a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-800">Settings</a>
                            </li>
                        </ul>
                    </div>

                    
                    <div className="mb-4">
                        <div className="flex justify-between items-center cursor-pointer" id="menu2-header">
                            <h2 className="text-lg font-semibold">Prêt</h2>
                            <button className="text-gray-600 focus:outline-none focus:ring-0 border-0"><i className="fas fa-chevron-right"></i></button>
                        </div>
                        <ul className="transition-all duration-300 max-h-0 overflow-hidden pl-4" id="menu2-content">
                            <li>
                                <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-800">Liste des prêts</a>
                            </li>
                            <li>
                                <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-800">Bénéficiaires</a>
                            </li>
                        </ul>
                    </div>

                   
                    <div className="mb-4">
                        <div className="flex justify-between items-center cursor-pointer" id="menu3-header">
                            <h2 className="text-lg font-semibold">Divers</h2>
                            <button className="text-gray-600 focus:outline-none focus:ring-0 border-0"><i className="fas fa-chevron-right"></i></button>
                        </div>
                        <ul className="transition-all duration-300 max-h-0 overflow-hidden pl-4" id="menu3-content">
                            <li>
                                <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-800">Auteurs</a>
                            </li>
                        </ul>
                    </div>
                </div>
          
            </>
            )
}

            export default Menu