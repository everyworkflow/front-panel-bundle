/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { lazy } from "react";

const DataFormPage = lazy(() => import("@EveryWorkflow/AdminPanelBundle/Page/Examples/DataFormPage"));
const DataFormBlockPage = lazy(() => import("@EveryWorkflow/FrontPanelBundle/Page/Example/DataFormBlockPage"));
const PageBuilderEditPage = lazy(() => import("@EveryWorkflow/FrontPanelBundle/Page/Example/PageBuilderEditPage"));

export const ExampleRoutes = [
    {
        path: '/examples/data-form',
        exact: true,
        component: DataFormPage
    },
    {
        path: '/examples/data-form-block',
        exact: true,
        component: DataFormBlockPage
    },
    {
        path: '/examples/page-builder-edit-page',
        exact: true,
        component: PageBuilderEditPage
    },
];
