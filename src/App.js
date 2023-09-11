import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/layout';
import { Fragment } from 'react';

const App = () => {
    return (
        <Router>
            <Link to="/" style={{ padding: '10px' }}>
                Home
            </Link>
            <Link to="/following" style={{ padding: '10px' }}>
                Following
            </Link>
            <Link to="/profile" style={{ padding: '10px' }}>
                Profile
            </Link>
            <Link to="/upload" style={{ padding: '10px' }}>
                Upload
            </Link>
            <div style={{ padding: '32px' }}>
                <Routes>
                    {publicRoutes.map((route, i) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={i}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
