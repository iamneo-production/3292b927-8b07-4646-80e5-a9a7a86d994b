import React, { Component } from 'react';
import { Form, Button, Container, Stack, Card } from 'react-bootstrap';
class ComplaintForm extends Component {
  render() {
    return (
      <div className="ComplaintForm">
        <span class="border">
        <Card>
          <Card.Body>
            <Container id="addHomeBody">
            <div class="p-5 text-center bg-light"><h4 class="mb-3">Add issue</h4></div>
              <Form>
                <Stack gap={3}>
                  <div className="bg-dark border"><Form.Group className="mb-3" controlId="formBasicEmail"><Form.Label>Name</Form.Label><Form.Control id="name" type="text" placeholder="Enter full name" Required/></Form.Group></div>
                  <div className="bg-dark border"><Form.Group className="mb-3" controlId="formBasicEmail"><Form.Label>Description</Form.Label><Form.Control id="description" type="text" placeholder="Enter Complaint description" Required/></Form.Group></div>
                  <div className="bg-light border"><Form.Group className="mb-3" controlId="formBasicEmail"><Form.Label>Image URL</Form.Label><Form.Control id="imageUrl" type="url" placeholder="Enter image URL" /></Form.Group></div>
                  <div className="bg-light border"><img id="imagePreviewArea"alt="No image"src="https://icons.iconarchive.com/icons/dtafalonso/ios8/256/Preview-icon.png" /></div>
                  <div className="bg-light border"><Button variant="primary" type="submit" id="submitButton">Submit</Button></div>

                </Stack>
              </Form>
            </Container>
          </Card.Body>
        </Card>
        </span>
      </div>
    );
  }

}

export default ComplaintForm;