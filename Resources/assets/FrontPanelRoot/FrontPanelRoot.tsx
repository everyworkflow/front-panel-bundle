/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTopOnRouteChange from "@EveryWorkflow/PanelBundle/Component/ScrollToTopOnRouteChange";
import FrontendLayoutComponent from "@EveryWorkflow/FrontPanelBundle/Component/FrontPanelLayoutComponent";
import RouteMapRenderComponent from "@EveryWorkflow/PanelBundle/Component/RouteMapRenderComponent";
import { RouteMaps } from "@EveryWorkflow/FrontPanelBundle/FrontPanelRoot/RouteMaps";
import FrontendContext from "@EveryWorkflow/FrontPanelBundle/Context/FrontendContext";
import FrontendReducer from "@EveryWorkflow/FrontPanelBundle/Reducer/FrontendReducer";
import { frontendState } from "@EveryWorkflow/FrontPanelBundle/State/FrontendState";
import RootPanelComponent from '@EveryWorkflow/PanelBundle/Component/RootPanelComponent';

const FrontPanelRoot = () => {
    const [state, dispatch] = useReducer(FrontendReducer, frontendState);

    return (
        <RootPanelComponent>
            <FrontendContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <ScrollToTopOnRouteChange>
                        <FrontendLayoutComponent>
                            <RouteMapRenderComponent routeMaps={RouteMaps} />
                        </FrontendLayoutComponent>
                    </ScrollToTopOnRouteChange>
                </BrowserRouter>
            </FrontendContext.Provider>
        </RootPanelComponent>
    );
};

export default FrontPanelRoot;
