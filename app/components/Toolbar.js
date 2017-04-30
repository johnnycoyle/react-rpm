import React, { Component } from 'react';
import styles from './styles/toolbar.css';
import GraphPicker from './GraphPicker';

const Toolbar = (props) => {

  const {
        tooltipValues,
        toggleTooltipValues,
  
        componentsActiveOnGraphs,
        removeActiveComponentFromGraph,

        allComponents
        } = props;

  return (
    <div>
      <div id={styles.toolbarContainer}>
        <div className={styles.toolbarPanel}>
          <div className={styles.toolbarPanelTitle}>
            <span>Displayed Graphs</span>
            
          </div>
        </div>
        <div className={styles.toolbarPanel}>
          <div className={styles.toolbarPanelTitle}>
            <span>Graph Selector</span>
            <GraphPicker allComponents={allComponents}/>
          </div>
        </div>
      </div>
    </div>
  )
}

//Component:
//Metric:
//Line Style:
//Line Color:
//[OPTIONAL] Graph Display:
//RENDER ON GRAPH!


export default Toolbar;
