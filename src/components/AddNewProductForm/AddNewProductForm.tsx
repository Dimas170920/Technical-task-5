import React from 'react';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { useFormik } from 'formik';
import { Button, TextField, Slider } from '@mui/material';
import validationSchema from './validationSchema'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { format } from 'date-fns';
import styles from './AddNewProductForm.module.scss';


interface AddNewProductFormProps {
submit: (values: any) => void
}


const AddNewProductForm = (props: AddNewProductFormProps) => {
    const { submit } = props
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: format(new Date(), 'MM/dd/yyyy'),
      rating: 10.0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        submit(values)
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.addNewProductForm}>
        <div className={styles.input_wrapper}>
        <TextField
          className={styles.input}
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        </div>
        <div className={styles.input_wrapper}>
        <TextField
          className={styles.input}
          id="author"
          name="author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Year</div>
        <DatePicker 
          name="year"
          id="year"
          value={formik.values.year}
          views={["year"]}
          onChange={value => formik.setFieldValue("year", value)}
          helperText={formik.touched.year && formik.errors.year}
          error={Boolean(formik.touched.year && formik.errors.year)}
            /> 
            </MuiPickersUtilsProvider>
            <div className={styles.slider_wrapper}>
              Rating
        <Slider 
          id='rating'
          name='rating'
          onChange={formik.handleChange}
          value={formik.values.rating}
          marks
          step={0.1}
          min={0}
          max={10.0}
          valueLabelDisplay="auto"
        />
        </div>
        <div className={styles.button}>
        <Button color="primary" variant="contained" fullWidth type="submit" >
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
};

export default  AddNewProductForm
