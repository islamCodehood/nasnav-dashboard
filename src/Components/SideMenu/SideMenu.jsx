import React from 'react';
import CompanyIconButton from '../Icons/CompanyIconButton/CompanyIconButton'
import ShopIconButton from '../Icons/ShopIconButton/ShopIconButton'
import BrandIconButton from '../Icons/BrandIconButton/BrandIconButton'
import ProductIconButton from '../Icons/ProductIconButton/ProductIconButton'
import ThemeIconButton from '../Icons/ThemeIconButton/ThemeIconButton'
import NavBoxIconButton from '../Icons/NavBoxIconButton/NavBoxIconButton'
import ThreeSixtyIconButton from '../Icons/ThreeSixtyIconButton/ThreeSixtyIconButton'
import OrderIconButton from '../Icons/OrderIconButton/OrderIconButton'
import PaymentIconButton from '../Icons/PaymentIconButton/PaymentIconButton'
import PluginIconButton from '../Icons/PluginIconButton/PluginIconButton'
import BigDataIconButton from '../Icons/BigDataIconButton/BigDataIconButton'
const SideMenu = () => {
    return ( 
        <div>
            <div className="small text-muted mb-3 mt-2">
                Shops, Products, Brands, & More...
            </div>
            <div className="row no-gutters">
                
                <div className="col-6 text-center"><CompanyIconButton /></div>
                <div className="col-6 text-center"><ShopIconButton /></div>
                <div className="col-6 text-center"><BrandIconButton /></div>
                <div className="col-6 text-center"><ProductIconButton /></div>
                
                
                   
            </div>
            <div className="small text-muted mb-3 mt-2">
                Tools
            </div>
            <div className="row no-gutters">
            <div className="col-6 text-center"><ThemeIconButton /></div>
                <div className="col-6 text-center"><NavBoxIconButton /></div>
                <div className="col-6 text-center"><ThreeSixtyIconButton /></div>
                <div className="col-6 text-center"><OrderIconButton /></div>
                <div className="col-6 text-center"><PaymentIconButton /></div>
                <div className="col-6 text-center"><PluginIconButton /></div>
                <div className="col-6 text-center"><BigDataIconButton /></div>
                
                
                
                
                
                
                

            </div>
        </div>
     );
}
 
export default SideMenu;