import React from 'react';
import PatientRow from './rows/patientRow';

class PatientTable extends React.Component {
    render() {
        var self = this;
        var rows = [];
        this.props.patients.forEach(function(patient) {
            rows.push(<PatientRow patient={patient}
                                  key={patient.patientId}
                                  update={self.props.updatePatient}
                                  recordValues={self.props.recordValues}
            />);
        });
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Patient ID</th><th>Date of Birth</th><th>Healthy</th><th>Hometown</th>
                        <th>Sex</th><th>Race</th><th>Nationality</th><th>Ethnicity</th><th>Placebo</th><th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>);
    }
}

export default PatientTable;