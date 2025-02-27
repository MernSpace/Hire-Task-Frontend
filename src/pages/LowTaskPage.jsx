import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Low =lazy(() => import('../components/Low/Low.jsx'));
const LowTaskPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Low/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default LowTaskPage;