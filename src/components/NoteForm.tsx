import { Col, Form, Row, Stack } from "react-bootstrap";

const NoteForm = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Label>Title</Form.Label>
            <Form.Control required />
          </Col>
          <Col>
            <Form.Label>Tags</Form.Label>
            <Form.Control required />
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};

export default NoteForm;
