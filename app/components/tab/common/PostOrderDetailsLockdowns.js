// @flow
import React, { Component } from 'react';
import { FadeLoader } from 'react-spinners';
import get from 'lodash.get';
import Container from '../../sections/Container';
import Fieldset from '../../sections/Fieldset';
import Row from '../../sections/Row';
import Col from '../../sections/Col';

type Props = {
  postOrderDetails: Object,
  isLoading: boolean
};

export default class PostOrderDetailsLockdowns extends Component<Props> {
  props: Props;

  renderLocations = (locations: Array) =>
    locations &&
    locations.map((location: Object) => (
      <tr>
        <td>{location.name}</td>
        <td>{location.quantity}</td>
        <td>{location.timeLock}</td>
        <td>{location.timeUnlock}</td>
      </tr>
    ));

  render() {
    const { postOrderDetails, isLoading } = this.props;
    const propertyLocations = get(postOrderDetails, 'propertyLocations');

    return (
      <Container>
        <Row>
          <Col w={100}>
            <Fieldset legend="Property Locations">
              {isLoading ? (
                <Row>
                  <Col justify="center">
                    <FadeLoader
                      sizeUnit="px"
                      size={150}
                      color="#ffffff"
                      loading={isLoading}
                    />
                  </Col>
                </Row>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Quantity</th>
                      <th>Lock Time</th>
                      <th>Unlock Time</th>
                    </tr>
                  </thead>
                  {this.renderLocations(propertyLocations)}
                </table>
              )}
            </Fieldset>
          </Col>
        </Row>
      </Container>
    );
  }
}
