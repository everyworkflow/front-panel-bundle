/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import PageBuilderComponent from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent";
import { MODE_EDIT } from "@EveryWorkflow/PageBuilderBundle/Component/PageBuilderComponent/PageBuilderComponent";
import { PageBuilderEditData } from "@EveryWorkflow/FrontPanelBundle/Page/Example/PageBuilderEditPage/pageBuilderEditData";

const PageBuilderEditPage = () => {
    return <PageBuilderComponent pageBuilderData={PageBuilderEditData} mode={MODE_EDIT} />;
}

export default PageBuilderEditPage;
