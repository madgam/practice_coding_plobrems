import renderer from 'react-test-renderer'
import FormLabel from 'src/components/FormLabel'

function MainComponent() {
  return <FormLabel label={'test'} />
}

test('FormLabel', () => {
  const testRenderer = renderer.create(<MainComponent />)
  const testInstance = testRenderer.root

  expect(testInstance.findByType(FormLabel).props.label).toBe('test')
})
