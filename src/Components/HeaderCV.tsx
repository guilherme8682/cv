import React, { Component, CSSProperties } from 'react'
import profilePhoto from '../Data/photo/profile.png'
import { white } from './Styles'

const style: { [id: string]: CSSProperties } = {
    container: {

        maxWidth: '800px',
        width: 'calc(100% - 3em)',
        display: 'flex',
        justifyContent: 'space-between',

        padding: '0 1.5em',
    },
    photo: {
        width: 108,
        borderRadius: 1000,
        transition: 'all 0.2s 0s ease',
        border: `4px solid transparent`,
        zIndex: 2,
    },
    photoHover: {
        transform: 'scale(1.3)',
        border: `4px solid ${white}`,
    },
    line: {
        borderBottom: `solid 4px ${white}`,
        position: 'relative',
        width: '300px',
        height: '0',
        top: 50,
        zIndex: 1,
    }
}

export class HeaderCV extends Component {

    state = {
        isDesktop: false,
        isHover: false,
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth > 650 });
    }

    render() {
        const { isDesktop } = this.state

        function Line({ width = '40%' }) {
            if (!isDesktop) width = '30%'
            return <div style={{ ...style.line, ...{ width } }}></div>
        }

        return <div
            className="noprint"
            style={style.container}
        >
            <Line />
            <img
                style={{
                    ...style.photo,
                    ...(this.state.isHover ? style.photoHover : {})
                }}
                onMouseMove={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}
                src={profilePhoto}
                alt="Foto de perfil" />
            <Line />
        </div>
    }

}