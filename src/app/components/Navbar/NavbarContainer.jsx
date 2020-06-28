import { connect } from 'react-redux';
import { navigate } from '../../model/StoreActions';
import NavbarComponent from './NavbarComponent';

const mapStateToProps = ({ nav }) => {
    return {
        views: nav.views,
        selectedIndex: nav.selectedIndex
    };
};

export default connect(mapStateToProps, { navigate })(NavbarComponent);
