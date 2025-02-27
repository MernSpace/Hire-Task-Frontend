import React, {Fragment, lazy, Suspense} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/LazyLoader";
const Medium =lazy(() => import('../components/medium/Medium.jsx'));
const HighTaskPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Medium/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default HighTaskPage;