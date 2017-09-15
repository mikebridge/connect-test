import * as React from 'react';
import * as ReactRedux from 'react-redux';

interface ICity {
    cityName: string;
    img: string;
}

// Action Creator
export const getCityInformation = () => ({
    type: 'GET_ALL_CITIES'
});

// HomePage Component

interface IHomePageOwnProps {
    // this is empty so that react-redux can extract an empty type
}

interface IHomePageStoreProps {
    allCityInformation: ICity[];
}

interface IHomePageDispatchProps {
    getAllCityInformation:  () => void;
}

type IHomePageProps =
    IHomePageOwnProps &
    IHomePageStoreProps &
    IHomePageDispatchProps;

class App extends React.Component<IHomePageProps> {

    componentDidMount() {
        this.props.getAllCityInformation();
    }

    render() {
        return (
            <div>
                ...
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: IHomePageOwnProps): IHomePageStoreProps => ({
    allCityInformation: state.cities // or wherever this is in your redux store
});

// This works
// const mapDispatchToProps = (dispatch: any, ownProps: IHomePageOwnProps): IHomePageDispatchProps => ({
//      getAllCityInformation: dispatch(getCityInformation())
//  });

// This doesn't
const mapDispatchToProps = {
    getCityInformation
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);