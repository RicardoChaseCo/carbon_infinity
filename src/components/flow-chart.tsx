import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  Position,
  Background,
  Controls,
  MiniMap,
  Handle,
  NodeTypes,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

const CustomNode = ({ data }: { data: { label: string; icon: string; type: 'input' | 'model' | 'output' } }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-2 shadow-sm rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex items-center">
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
          {data.icon}
        </div>
        <div className="ml-2">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{data.label}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{data.type}</div>
        </div>
      </div>
      {data.type !== 'output' && (
        <Handle 
          type="source" 
          position={Position.Right} 
          className="!w-2 !h-2 !bg-green-400 !border-2 !border-white dark:!border-gray-800" 
        />
      )}
      {data.type !== 'input' && (
        <Handle 
          type="target" 
          position={Position.Left} 
          className="!w-2 !h-2 !bg-green-400 !border-2 !border-white dark:!border-gray-800" 
        />
      )}
    </motion.div>
  );
};

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const initialNodes: Node[] = [
  // Input Layer
  { id: '1', type: 'custom', position: { x: 0, y: 50 }, data: { label: 'Trade Data', icon: '📊', type: 'input' } },
  { id: '2', type: 'custom', position: { x: 0, y: 150 }, data: { label: 'AIS Shipping', icon: '🚢', type: 'input' } },
  { id: '3', type: 'custom', position: { x: 0, y: 250 }, data: { label: 'Policy Data', icon: '📜', type: 'input' } },
  
  // First Model Layer
  { id: '8', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Trade Zone Delineation', icon: '🌐', type: 'model' } },
  
  // Second Input Layer
  { id: '4', type: 'custom', position: { x: 250, y: 350 }, data: { label: 'CO₂ Satellite', icon: '🛰️', type: 'input' } },
  { id: '5', type: 'custom', position: { x: 250, y: 450 }, data: { label: 'Industrial Activity', icon: '🏭', type: 'input' } },
  
  // Second Model Layer
  { id: '9', type: 'custom', position: { x: 500, y: 400 }, data: { label: 'CO₂ to Production Proxy', icon: '🏭', type: 'model' } },
  
  // Third Model Layer
  { id: '10', type: 'custom', position: { x: 750, y: 250 }, data: { label: 'IOSI Aggregation', icon: '📊', type: 'model' } },
  
  // Final Input Layer
  { id: '6', type: 'custom', position: { x: 750, y: 450 }, data: { label: 'Macro Indicators', icon: '📈', type: 'input' } },
  { id: '7', type: 'custom', position: { x: 750, y: 550 }, data: { label: 'Historical Prices', icon: '💰', type: 'input' } },
  
  // Final Model Layer
  { id: '11', type: 'custom', position: { x: 1000, y: 350 }, data: { label: 'Price Forecasting', icon: '🔮', type: 'model' } },
  
  // Output Layer
  { id: '12', type: 'custom', position: { x: 500, y: 50 }, data: { label: 'Trade Zone Definitions', icon: '🗺️', type: 'output' } },
  { id: '13', type: 'custom', position: { x: 750, y: 150 }, data: { label: 'Factory Activity Indices', icon: '📉', type: 'output' } },
  { id: '14', type: 'custom', position: { x: 1000, y: 150 }, data: { label: 'IOSI', icon: '📊', type: 'output' } },
  { id: '15', type: 'custom', position: { x: 1250, y: 350 }, data: { label: 'Price Forecast', icon: '💹', type: 'output' } },
];

const initialEdges: Edge[] = [
  // Inputs to Model 1
  { id: 'e1-8', source: '1', target: '8', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e2-8', source: '2', target: '8', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e3-8', source: '3', target: '8', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },

  // Inputs to Model 2
  { id: 'e4-9', source: '4', target: '9', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e5-9', source: '5', target: '9', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },

  // Model outputs
  { id: 'e8-12', source: '8', target: '12', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e9-13', source: '9', target: '13', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },

  // Intermediate connections
  { id: 'e12-10', source: '12', target: '10', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e13-10', source: '13', target: '10', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e10-14', source: '10', target: '14', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },

  // Final connections
  { id: 'e14-11', source: '14', target: '11', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e6-11', source: '6', target: '11', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e7-11', source: '7', target: '11', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
  { id: 'e11-15', source: '11', target: '15', animated: true, type: 'smoothstep', style: { stroke: '#10b981', strokeWidth: 2 } },
];

export function FlowChart() {
  return (
    <div className="w-full h-[600px] md:h-[800px] bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Lines}
          gap={16}
          size={1}
          color="rgba(0, 0, 0, 0.1)"
          className="dark:bg-gray-900"
        />
        <Controls className="!bg-white !border-gray-200 dark:!bg-gray-800 dark:!border-gray-700" />
        <MiniMap 
          className="!bg-white !border-gray-200 dark:!bg-gray-800 dark:!border-gray-700" 
          nodeColor="#e5e7eb"
          maskColor="rgba(229, 231, 235, 0.2)"
        />
      </ReactFlow>
    </div>
  );
}

