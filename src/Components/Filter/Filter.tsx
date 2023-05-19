import { SetStateAction, useState } from 'react';
import styles from './styles.module.css';
import Select from 'react-select';


export const Filter = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleGenreChange = (selectedOption: any) => {
    setSelectedGenre(selectedOption);
  }

  const handleYearChange = (selectedOption: any) => {
    setSelectedYear(selectedOption);
  }

  const handleMovieChange = (selectedOption: any) => {
    setSelectedMovie(selectedOption);
  }

  const handleDirectorChange = (selectedOption: any) => {
    setSelectedDirector(selectedOption);
  }

  const handleRatingChange = (selectedOption: any) => {
    setSelectedRating(selectedOption);
  }

  const genreOptions = [
    { value: 'action', label: 'Action' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'drama', label: 'Drama' }
  ];

  const yearOptions = [
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' }
  ];

  const movieOptions = [
    { value: 'movie1', label: 'Movie 1' },
    { value: 'movie2', label: 'Movie 2' },
    { value: 'movie3', label: 'Movie 3' }
  ];

  const directorOptions = [
    { value: 'director1', label: 'Director 1' },
    { value: 'director2', label: 'Director 2' },
    { value: 'director3', label: 'Director 3' }
  ];

  const ratingOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' }
  ];

  return (
    <section className={styles.filter}>
      <div className={styles.list}>
        <Select
          className={styles.select}
          value={selectedGenre}
          onChange={handleGenreChange}
          options={genreOptions}
          placeholder="Жанры"
          styles={{
            control: (provided, state) => ({
              ...provided,
              height: "56px",
              backgroundColor: "#312b45",
              border: "none",
              margin: "5px",
              "&:hover": {
                outline: 0,
                border: 0
              }
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              backgroundColor: "none",
            }),
            container: (provided, state) => ({
              ...provided,
              width: "20%",
            }),
            option: (provided, state) => ({
              ...provided,
              color: "white",
              "&:hover": {
                backgroundColor: "#7e798f",
                color: "white"
              },
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: "#312b45",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: "white"
            })
          }}
        />
        <Select
          className={styles.select}
          value={selectedYear}
          onChange={handleYearChange}
          options={yearOptions}
          placeholder="Режиссёры"
          styles={{
            control: (provided, state) => ({
              ...provided,
              height: "56px",
              backgroundColor: "#312b45",
              border: "none",
              margin: "5px",
              "&:hover": {
                outline: 0,
                border: 0
              }
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              backgroundColor: "none",
            }),
            container: (provided, state) => ({
              ...provided,
              width: "20%",
            }),
            option: (provided, state) => ({
              ...provided,
              color: "white",
              "&:hover": {
                backgroundColor: "#7e798f",
                color: "white"
              },
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: "#312b45",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: "white"
            })
          }}
        />
        <Select
          className={styles.select}
          value={selectedMovie}
          onChange={handleMovieChange}
          options={movieOptions}
          placeholder="Страны"
          styles={{
            control: (provided, state) => ({
              ...provided,
              height: "56px",
              backgroundColor: "#312b45",
              border: "none",
              margin: "5px",
              "&:hover": {
                outline: 0,
                border: 0
              }
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              backgroundColor: "none",
            }),
            container: (provided, state) => ({
              ...provided,
              width: "20%",
            }),
            option: (provided, state) => ({
              ...provided,
              color: "white",
              "&:hover": {
                backgroundColor: "#7e798f",
                color: "white"
              },
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: "#312b45",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: "white"
            })
          }}
        />
        <Select
          className={styles.select}
          value={selectedDirector}
          onChange={handleDirectorChange}
          options={directorOptions}
          placeholder="Годы"
          styles={{
            control: (provided, state) => ({
              ...provided,
              height: "56px",
              backgroundColor: "#312b45",
              border: "none",
              margin: "5px",
              "&:hover": {
                outline: 0,
                border: 0
              }
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              backgroundColor: "none",
            }),
            container: (provided, state) => ({
              ...provided,
              width: "20%",
            }),
            option: (provided, state) => ({
              ...provided,
              color: "white",
              "&:hover": {
                backgroundColor: "#7e798f",
                color: "white"
              },
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: "#312b45",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: "white"
            })
          }}
        />
        <Select
          className={styles.select}
          value={selectedRating}
          onChange={handleRatingChange}
          options={ratingOptions}
          placeholder="Рейтинг Иви"
          styles={{
            control: (provided, state) => ({
              ...provided,
              height: "56px",
              backgroundColor: "#312b45",
              border: "none",
              margin: "5px",
              "&:hover": {
                outline: 0,
                border: 0
              }
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              backgroundColor: "none",
            }),
            container: (provided, state) => ({
              ...provided,
              width: "20%",
            }),
            option: (provided, state) => ({
              ...provided,
              color: "white",
              "&:hover": {
                backgroundColor: "#7e798f",
                color: "white"
              },
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: "#312b45",
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: "white"
            })
          }}
        />
      </div>
    </section>
  )
}