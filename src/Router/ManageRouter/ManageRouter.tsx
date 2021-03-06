import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_COMPONENT, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import BlogRouter from './SubRouter/BlogRouter';
import NotFound from '../../Component/NotFound';

const Frame = React.lazy(() => import('../../Component/Frame'));

export default () =>
{
    return (
        <Switch>
            <Frame>
                <Route exact={true}
                       path={PAGE_ID_TO_ROUTE[PAGE_ID.MANAGE.INDEX]}
                       component={PAGE_ID_TO_COMPONENT[PAGE_ID.MANAGE.INDEX]} />
                <Route path={PAGE_ID_TO_ROUTE[PAGE_ID.MANAGE.BLOG.INDEX]} component={BlogRouter} />
            </Frame>
            <Route render={NotFound} />
        </Switch>
    );
};