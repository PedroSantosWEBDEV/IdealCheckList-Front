import {FC, useState} from 'react'
import {KTSVG, isNotEmpty} from '../../../helpers'
import {useIntl} from 'react-intl'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {Summary, initialSummary} from './core/_models'
import {useFormik} from 'formik'
import {createSummary, updateSummary} from './core/_requests'
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
type Props = {
  isSummaryLoading: boolean
  handleClose: () => void | undefined
  summary: Summary
}
const SummaryModalContent: FC<Props> = ({handleClose, summary, isSummaryLoading}) => {
  const intl = useIntl()
  const [summaryForEdit] = useState<Summary>({
    ...summary,

    text: summary.text || initialSummary.text,
  })
  const formik = useFormik({
    initialValues: summaryForEdit,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateSummary(values)
        } else {
          await createSummary(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
      }
    },
  })

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [ 'bold', 'italic', 'underline', 'strike' ],
      ],
    }
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
  ]
  return (
    <div className='modal-content'>
      {/* <div className='modal-header border-0 '> */}
        <div className='d-flex justify-content-end align-items-center mt-3 me-3'>
          <button
            className='btn btn-sm btn-icon btn-active-color-primary h-auto ms-4'
            onClick={handleClose}
          >
            <KTSVG
              className='svg-icon-2x svg-icon-gray-800'
              path='/media/icons/duotune/arrows/arr061.svg'
            />
          </button>
        </div>
      {/* </div> */}
      <div className='modal-body d-flex flex-column flex-xl-row h-md-200px h-200px'>
        {/* <ReactQuill
        {...formik.getFieldProps('text')}
          theme='snow'
          id='name'
        //   className='w-100 h-md-100px h-100px'
        className={clsx(
            'w-100 h-md-100px h-100px',
            {'is-invalid': formik.touched.text && formik.errors.text},
            {
              'is-valid': formik.touched.text && !formik.errors.text,
            }
          )}
          value={''}
          placeholder={'Write something awesome...'}
          modules={modules}
          formats={formats}
        /> */}
      </div>
    </div>
  )
}

export {SummaryModalContent}
