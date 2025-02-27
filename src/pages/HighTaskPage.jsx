import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const High =lazy(() => import('../components/high/high.jsx'));
const HighTaskPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <High/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default HighTaskPage;