/*
 * This Grid feature adds something that Ext Grids should have had from the start:
 * the ability to add custom styling to Grid cells and rows. Yes, as easy as that.
 *  
 * Version 0.9.
 *  
 * Copyright (C) 2011-2012 Alexander Tokarev.
 *
 * This code is licensed under the terms of the Open Source LGPL 3.0 license.
 * Commercial use is permitted to the extent that the code/component(s) do NOT
 * become part of another Open Source or Commercially licensed development library
 * or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
*/

Ext.ns('Ext.ux.grid.feature');

Ext.define('Ext.ux.grid.feature.RowStyle', {
    extend: 'Ext.grid.feature.Feature',
    alias:  'feature.rowstyle',
    
    hasFeatureEvent: false,
    
    /**
     * @cfg {String} customRowClass CSS class to add to data row <tr> tag
     */
    customRowClass: undefined,
    
    /**
     * @cfg {String} customCellClass CSS class to add to data row <td> tag
     */
    customCellClass: undefined,
    
    /**
     * @cfg {String} customDivClass CSS class to add to data row <div> element inside table cell
     */
    customDivClass: undefined,
    
    constructor: function(config) {
        var me = this;
        
        Ext.apply(me, config);
        
        me.callParent(arguments);
    },
    
    /**
     * Injects custom CSS classes in row template.
     */
    mutateMetaRowTpl: function(tpl) {
        var me     = this,      // Feature object
            trCls  = me.customRowClass,
            tdCls  = me.customCellClass,
            divCls = me.customDivClass;
        
        for ( var i = 0, l = tpl.length; i < l; i++ ) {
            var chunk = tpl[i];
            
            if ( trCls ) {
                chunk = chunk.replace(/(<tr.*class=")([^"]*)/, '$1$2 ' + trCls);
            };
            
            if ( tdCls ) {
                chunk = chunk.replace(/(<td.*class=")([^"]*)/, '$1$2 ' + tdCls);
            };
            
            if ( divCls ) {
                chunk = chunk.replace(/(<div.*class=")([^"]*)/, '$1$2 ' + divCls);
            };
            
            tpl[i] = chunk;
        };
    }
});