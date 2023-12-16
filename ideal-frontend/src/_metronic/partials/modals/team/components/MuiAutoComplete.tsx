import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses, AutocompleteCloseReason,createFilterOptions } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import InputBase from '@mui/material/InputBase'
import {useIntl} from 'react-intl'
import Popper from '@mui/material/Popper'
import { Team } from '../core/_models';
import { User } from '../../user-create-modal-stepper/core/_models';
import { getUsers } from '../../user-create-modal-stepper/core/_requests';
import CloseIcon from '@mui/icons-material/Close'
import DoneIcon from '@mui/icons-material/Done'
import {useTheme, styled} from '@mui/material/styles'
import { Box } from '@mui/material';
import { Button } from 'react-bootstrap';
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { isNotEmpty, toAbsoluteUrl, UserSearch } from '../../../../helpers';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

type Props = {
  team: Team
  updateData: (fieldsToUpdate: Partial<Team>) => void
}

interface PopperComponentProps {
  anchorEl?: any
  disablePortal?: boolean
  open: boolean
}

const StyledAutocompletePopper = styled('div')(({theme}) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: 'none',
    margin: 0,
    color: 'inherit',
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      borderBottom: `1px solid  ${theme.palette.mode === 'light' ? ' #eaecef' : '#30363d'}`,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent',
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative',
  },
}))

function PopperComponent(props: PopperComponentProps) {
  const {disablePortal, anchorEl, open, ...other} = props
  return <StyledAutocompletePopper {...other} />
}

const StyledInput = styled(InputBase)(({theme}) => ({
  padding: 10,
  width: '100%',
  borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
  '& input': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
    fontSize: 14,
    '&:focus': {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === 'light' ? 'rgba(3, 102, 214, 0.3)' : 'rgb(12, 45, 107)'
      }`,
      borderColor: theme.palette.mode === 'light' ? '#0366d6' : '#388bfd',
    },
  },
}))
const StyledPopper = styled(Popper)(({theme}) => ({
  border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}))

export const MuiAutoComplete: React.FC<Props> = ({team,updateData}) => {
  // debugger;
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<User[]>([]);
  const [pendingValue, setPendingValue] = React.useState<User[] >(team.user)
  const loading = open && options.length === 0;
  const theme = useTheme()
  
  const intl = useIntl()
  const TemaAtual = window.localStorage.getItem('kt_theme_mode_value') || ''
  
  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
    if (anchorEl) {
      anchorEl.focus()
    }
    setAnchorEl(null)
  }
  // console.log(team)
  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.
      await getUsers().then((response)=>{
      // debugger
      if (active) {
        setOptions([...response.data]);
      }
      })
      
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  interface IcreateFilterOptions extends User {
    inputValue?: string
}
// console.log(loading)
const filter = createFilterOptions<IcreateFilterOptions>()

  return (
    <>
    <label className='required fw-bold fs-6 mb-3'>Membros</label>
        <div className='text-center'>  
        <Button className='btn btn-sm btn-primary w-100' aria-describedby={'Auto'} onClick={handleClick}>
          {intl.formatMessage({id: 'FORM.INPUT.NAME.SELECTUSER_TEAMS'})}
        </Button>
      </div>
      <div className='form-check form-check-custom form-check-solid mt-3'>
                  <input className='form-check-input' type='checkbox' value='1'  />
                  <label className='form-check-label'>
                    {intl.formatMessage({id: 'FORM.INPUT.NAME.ALLOW_TEAMS'})}
                  </label>
                </div>
      
                {pendingValue?.length > 0 && ( <div className='card bg-secondary mt-5 gap-6 py-3'>
        {pendingValue?.map((label) => (
          <>
            <div className='d-flex align-items-center ms-3'>
              <div className='symbol symbol-circle symbol-40px overflow-hidden me-3'>
                {label.avatar && TemaAtual === 'dark' ? (
                  <div className='symbol-label'>
                    <img
                      src={isNotEmpty(label.avatar) && label.avatar !== 'null'
                        ? label.avatar
                        : toAbsoluteUrl('/media/svg/files/blank-image-dark.svg')}
                      alt={label.name}
                      className='w-100'
                    />
                  </div>
                ): (
                  <div className='symbol-label'>
                    <img
                      src={isNotEmpty(label.avatar) && label.avatar !== 'null'
                        ? label.avatar
                        : toAbsoluteUrl('/media/svg/files/blank-image.svg')}
                      alt={label.name}
                      className='w-100'
                    />
                  </div>
                )}
              </div>
              <div className='d-flex flex-column'>
                <p className='text-gray-900 mb-0'>{label.name}</p>
                <span className='text-gray-600 fw-semibold d-block fs-7'>{label.job_role}</span>
              </div>
            </div>
          </>
        ))}
        </div>
        )}
      <StyledPopper id={'Auto'} open={open} anchorEl={anchorEl} placement="top-end">
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Box
              sx={{
                borderBottom: `1px solid ${
                  theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
                }`,
                padding: '8px 10px',
                fontWeight: 600,
              }}
            >
              {intl.formatMessage({id: 'FORM.INPUT.NAME.ADDUSER_TEAMS'})}
            </Box>
    <Autocomplete
      multiple
      id="asynchronous-demo"
      sx={{ width: '100%' }}
      open
      classes={{inputFocused: 'd-none'}}
      onClose={(
        event: React.ChangeEvent<{}>,
        reason: AutocompleteCloseReason
      ) => {

        if (reason === 'escape') {
          handleClose()
          // setOpen(false);
        }
      }}
      PopperComponent={PopperComponent}
      onChange={(e, newValue, reason) =>{
        // debugger;
        if (e.type === 'keydown' &&
                  (e as React.KeyboardEvent).key === 'Backspace' &&
                  reason === 'removeOption') {
                  return
                }
        let user_id: number[] | undefined = []
        newValue.forEach((element)=>{
        
          user_id?.push(element.id)
        })
        updateData({
        user_id: user_id
        })
        setPendingValue(newValue)
      }
      }
      isOptionEqualToValue={(option, value) => option.name === value.name} 
      // getOptionDisabled={(option) =>
      //   option === pendingValue
      // }
      defaultValue={pendingValue}
      renderTags={() => null}
      noOptionsText="Sem Usuarios"
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      disableCloseOnSelect
      renderOption={(props, option, { selected }) => (

        <li {...props}>
          <Box
            component={DoneIcon}
            sx={{ width: 17, height: 17, mr: '15px', ml: '-2px' }}
            style={{
              visibility: selected ? 'visible' : 'hidden',
            }} />
            {option.avatar && TemaAtual === 'dark' ? (
          <Box
            component="img"
            sx={{
              width: 20,
              height: 20,
              flexShrink: 0,
              borderRadius: '3px',
              mr: 1,
              mt: '2px',
            }}
            src={isNotEmpty(option.avatar) && option.avatar !== 'null'
              ? option.avatar
              : toAbsoluteUrl('/media/svg/files/blank-image-dark.svg')} />
            ) : (
              <Box
            component="img"
            sx={{
              width: 20,
              height: 20,
              flexShrink: 0,
              borderRadius: '3px',
              mr: 1,
              mt: '2px',
            }}
            src={isNotEmpty(option.avatar) && option.avatar !== 'null'
              ? option.avatar
              : toAbsoluteUrl('/media/svg/files/blank-image.svg')} />
            )}
          <Box
            sx={{
              flexGrow: 1,
              '& span': {
                color: theme.palette.mode === 'light' ? '#586069' : '#8b949e',
              },
            }}
          >
            {option.name}
            <br />
            <span>{option.job_role}</span>
          </Box>
          <Box
            component={CloseIcon}
            sx={{ opacity: 0.6, width: 18, height: 18 }}
            style={{
              visibility: selected ? 'visible' : 'hidden',
            }} />
        </li>
      )}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const {inputValue} = params;
        const isExisting = options.some((option) => inputValue === option.name);
        if (inputValue !== '' && !isExisting) {
          // filtered.push()
        }
        return filtered;
    }}
      renderInput={(params) => (
        <StyledInput
                  ref={params.InputProps.ref}
                  inputProps={params.inputProps}
                  autoFocus
                  placeholder="Filter labels"
                />
      )}
    />
    </div>
    </ClickAwayListener>
    </StyledPopper>
    </>
  )
}