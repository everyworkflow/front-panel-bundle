/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import FrontendStateInterface from "@EveryWorkflow/FrontPanelBundle/Model/FrontendStateInterface";

interface PanelActionInterface {
    type: string;
    payload: any;
}

const FrontendReducer = (
    state: FrontendStateInterface,
    action: PanelActionInterface
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default FrontendReducer;
