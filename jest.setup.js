import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

process.env.MONGO_URI = 'mongodb://localhost/test-db'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
