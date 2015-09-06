import React from 'react';
import Stream from './Stream.react';
import Collection from './Collection.react';

class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream />
                    </div>
                    <div className="col-md-8">
                        <Collection />
                    </div>
                </div>
            </div>
        );
    }
}

export default Application;
