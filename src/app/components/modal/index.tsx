import { FC, forwardRef } from 'react'
import { Zoom, ZoomProps, IconButton } from '@mui/material'
import { ModalProps } from './types'
import {
  StyledDialog,
  Wrapper,
  ChildWrapper,
  TopWrapper,
  Title,
  TopRightWrapper,
  Icon,
} from './style'
import { IMAGES } from 'assets/react_asset_gen'

const Transition = forwardRef<HTMLDivElement, ZoomProps>((props, ref) => {
  return <Zoom ref={ref} {...props} timeout={300} />
})

export const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  title,
  actions,
  anchor = 'bottom',
  ...props
}) => {
  return (
    <StyledDialog
      TransitionComponent={Transition}
      fullScreen={false}
      open={open || false}
      onClose={() => (onClose ? onClose() : null)}
      slotProps={{
        backdrop: {
          style: {
            background: 'rgba(7, 0, 18, 0.8)',
            // backdropFilter: 'blur(5px)',
          },
        },
      }}
      {...props}
    >
      <Wrapper>
        {title && onClose && (
          <TopWrapper>
            {typeof title === 'string' ? <Title>{title}</Title> : title}
            <TopRightWrapper>
              {actions ? actions : <div />}
              {onClose ? (
                <IconButton onClick={() => onClose()}>
                  <Icon src={IMAGES.closeIcon} />
                </IconButton>
              ) : (
                <></>
              )}
            </TopRightWrapper>
          </TopWrapper>
        )}
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    </StyledDialog>
  )
}
