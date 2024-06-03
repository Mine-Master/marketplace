import { Dialog, Drawer, IconButton, styled } from '@mui/material'
import { ROW_ALIGN_CENTER__SPACE_B, ROW_CENTER } from 'styles/globalStyles'

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    background-color: var(--background-color);
    border-radius: 12px  ;
    width: 1000px;
    padding: 32px;
    max-width: 1000px;
  }
`

export const Wrapper = styled('div')`
  border-radius: 20px;
  width: 100%;
  cursor: auto;
`
export const ChildWrapper = styled('div')`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
export const TopWrapper = styled('div')`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
  margin-bottom: 40px;
`

export const TopRightWrapper = styled('div')`
  ${ROW_CENTER}
  gap:16px;
`

export const Title = styled('h1')`
  font-size: 30px;
  line-height: 38px;
  font-weight: 400;
  color: var(--greyscale-800);
`

export const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: var(--white);
    padding: 24px 32px;
  }
`

export const StyledIconButton = styled(IconButton)`
  padding: 0;
`

export const Icon= styled('img')`
   width: 24px;
   height: 24px;
`