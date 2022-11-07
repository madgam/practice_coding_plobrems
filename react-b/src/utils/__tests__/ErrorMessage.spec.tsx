import renderer from 'react-test-renderer'
import ErrorMessage from 'src/components/ErrorMessage'

function MainComponent() {
  return <ErrorMessage label={'error test'} />
}

test('FormLabel', () => {
  const testRenderer = renderer.create(<MainComponent />)
  const testInstance = testRenderer.root

  expect(testInstance.findByType(ErrorMessage).props.label).toBe('error test')
})
