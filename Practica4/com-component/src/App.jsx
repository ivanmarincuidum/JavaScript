import { useState } from 'react';
import './App.css';
import { SizeSelector } from './components/SizeSelector';

function App() {
  const [currentSize, setCurrentSize] = useState('none');
  const [selectedColor, setSelectedColor] = useState('none');
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setSelectedImage(data.imageUrl);
        } else {
          console.error('Error al subir la imagen');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="App App-header">
      <h1>Talla seleccionada: {currentSize}</h1>

      <SizeSelector
        selectedSize={currentSize}
        onSizeChange={setCurrentSize}
      />

      {/* Selector de color */}
      <div className="color-selector">
        <label htmlFor="colorSelect">Color:</label>
        <select
          id="colorSelect"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="none">Selecciona un color</option>
          <option value="Negro">Negro</option>
          <option value="Blanco">Blanco</option>
          <option value="Rojo">Rojo</option>
          <option value="Azul">Azul</option>
          <option value="Verde">Verde</option>
        </select>
      </div>

      <p style={{ marginTop: '10px' }}>
        Color seleccionado: {selectedColor}
      </p>

      {/* Subida de imagen */}
      <div className="image-uploader">
        <label htmlFor="fileInput">Subir imagen:</label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageUpload}
          disabled={uploading}
        />
        {uploading && <p>Subiendo imagen...</p>}
      </div>

      {/* Vista previa */}
      {selectedImage && (
        <div className="image-preview">
          <p>Vista previa:</p>
          <img src={selectedImage} alt="Vista previa" />
        </div>
      )}
    </div>
  );
}

export default App;