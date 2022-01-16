/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { createContext } from 'react';
import { frontendState } from "@EveryWorkflow/FrontPanelBundle/State/FrontendState";
import FrontendStateInterface from "@EveryWorkflow/FrontPanelBundle/Model/FrontendStateInterface";

export interface FrontendContextInterface {
    state: FrontendStateInterface;
    dispatch: any;
}

const FrontendContext = createContext<FrontendContextInterface>({
    state: frontendState,
    dispatch: () => null,
});

export default FrontendContext;
