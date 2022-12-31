import React from 'react';
import theme from '../../styles';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    '@keyframes moveleft': {
      from: {
        transform: 'translate3d(0,0,0)',
      },
      to: {
        transform: 'translate3d(-50rem,0,0)',
      },
    },
    container: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '20px',
      overflow: 'hidden',
      backgroundColor: theme.palette.blue1.main,
    },
  });
  const Timeline = () => {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <a
          href='https://www.instagram.com/strategix4/'
          // target='_blank'
          rel='noopener noreferrer'
          title='Strategix4 instagram'
        >
          <motion.img
            src={LogoSx4}
            className={classes.logo}
            alt='logo'
            whileHover={{ scale: 1.3, color: '#FFF' }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </a>
  
        <LogoBusiness
          title={'Parque La Ruina'}
          href={'https://parquelaruina.com/'}
          logo={plrLogo}
        />
        <LogoBusiness
          title={'Espacio Abierto'}
          href={'https://instagram.com/elespacioabierto?igshid=YmMyMTA2M2Y='}
          logo={eaLogo}
        />
        <LogoBusiness
          title={'Sol Energy'}
          href={'https://solenergy.mx/'}
          logo={solEnergyLogo}
        />
        <LogoBusiness
          title={'Camro'}
          href={'https://instagram.com/camrosoluciones?igshid=YmMyMTA2M2Y='}
          logo={camroLogo}
        />
        <LogoBusiness
          title={'Médica de la Ciudad'}
          href={'https://notisana.com/'}
          logo={mdlcLogo}
        />
        <LogoBusiness
          style={{ filter: 'invert(100%)' }}
          title={'Coro Studio'}
          href={'https://instagram.com/coro_studio?igshid=YmMyMTA2M2Y='}
          logo={coroLogo}
        />
        <LogoBusiness
          title={'Parque La Ruina'}
          href={'https://parquelaruina.com/'}
          logo={plrLogo}
        />
        <LogoBusiness
          title={'Espacio Abierto'}
          href={'https://instagram.com/elespacioabierto?igshid=YmMyMTA2M2Y='}
          logo={eaLogo}
        />
        <LogoBusiness
          title={'Sol Energy'}
          href={'https://solenergy.mx/'}
          logo={solEnergyLogo}
        />
        <LogoBusiness
          title={'Camro'}
          href={'https://instagram.com/camrosoluciones?igshid=YmMyMTA2M2Y='}
          logo={camroLogo}
        />
        <LogoBusiness
          title={'Médica de la Ciudad'}
          href={'https://notisana.com/'}
          logo={mdlcLogo}
        />
        <LogoBusiness
          title={'Coro Studio'}
          href={'https://instagram.com/coro_studio?igshid=YmMyMTA2M2Y='}
          logo={coroLogo}
        />
        <LogoBusiness
          title={'Parque La Ruina'}
          href={'https://parquelaruina.com/'}
          logo={plrLogo}
        />
        <LogoBusiness
          title={'Espacio Abierto'}
          href={'https://instagram.com/elespacioabierto?igshid=YmMyMTA2M2Y='}
          logo={eaLogo}
        />
        <LogoBusiness
          title={'Sol Energy'}
          href={'https://solenergy.mx/'}
          logo={solEnergyLogo}
        />
        <LogoBusiness
          title={'Camro'}
          href={'https://instagram.com/camrosoluciones?igshid=YmMyMTA2M2Y='}
          logo={camroLogo}
        />
        <LogoBusiness
          title={'Médica de la Ciudad'}
          href={'https://notisana.com/'}
          logo={mdlcLogo}
        />
        <LogoBusiness
          title={'Coro Studio'}
          href={'https://instagram.com/coro_studio?igshid=YmMyMTA2M2Y='}
          logo={coroLogo}
        />
        <LogoBusiness
          title={'Parque La Ruina'}
          href={'https://parquelaruina.com/'}
          logo={plrLogo}
        />
        <LogoBusiness
          title={'Espacio Abierto'}
          href={'https://instagram.com/elespacioabierto?igshid=YmMyMTA2M2Y='}
          logo={eaLogo}
        />
        <LogoBusiness
          title={'Sol Energy'}
          href={'https://solenergy.mx/'}
          logo={solEnergyLogo}
        />
        <LogoBusiness
          title={'Camro'}
          href={'https://instagram.com/camrosoluciones?igshid=YmMyMTA2M2Y='}
          logo={camroLogo}
        />
        <LogoBusiness
          title={'Médica de la Ciudad'}
          href={'https://notisana.com/'}
          logo={mdlcLogo}
        />
        <LogoBusiness
          title={'Coro Studio'}
          href={'https://instagram.com/coro_studio?igshid=YmMyMTA2M2Y='}
          logo={coroLogo}
        />
        <LogoBusiness
          title={'Parque La Ruina'}
          href={'https://parquelaruina.com/'}
          logo={plrLogo}
        />
        <LogoBusiness
          title={'Espacio Abierto'}
          href={'https://instagram.com/elespacioabierto?igshid=YmMyMTA2M2Y='}
          logo={eaLogo}
        />
        <LogoBusiness
          title={'Sol Energy'}
          href={'https://solenergy.mx/'}
          logo={solEnergyLogo}
        />
        <LogoBusiness
          title={'Camro'}
          href={'https://instagram.com/camrosoluciones?igshid=YmMyMTA2M2Y='}
          logo={camroLogo}
        />
        <LogoBusiness
          title={'Médica de la Ciudad'}
          href={'https://notisana.com/'}
          logo={mdlcLogo}
        />
        <LogoBusiness
          title={'Coro Studio'}
          href={'https://instagram.com/coro_studio?igshid=YmMyMTA2M2Y='}
          logo={coroLogo}
        />
        <LogoBusiness
          title={'Parque La Ruina'}
          href={'https://parquelaruina.com/'}
          logo={plrLogo}
        />
        <LogoBusiness
          title={'Espacio Abierto'}
          href={'https://instagram.com/elespacioabierto?igshid=YmMyMTA2M2Y='}
          logo={eaLogo}
        />
        <LogoBusiness
          title={'Sol Energy'}
          href={'https://solenergy.mx/'}
          logo={solEnergyLogo}
        />
        <LogoBusiness
          title={'Camro'}
          href={'https://instagram.com/camrosoluciones?igshid=YmMyMTA2M2Y='}
          logo={camroLogo}
        />
        <LogoBusiness
          title={'Médica de la Ciudad'}
          href={'https://notisana.com/'}
          logo={mdlcLogo}
        />
        <LogoBusiness
          style={{ filter: 'invert(100%)' }}
          title={'Coro Studio'}
          href={'https://instagram.com/coro_studio?igshid=YmMyMTA2M2Y='}
          logo={coroLogo}
        />
      </div>
    );
  };
  export default Timeline;