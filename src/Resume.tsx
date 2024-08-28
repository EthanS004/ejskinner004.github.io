
import { Container, Card, Text, Title, List, Divider, Stack } from '@mantine/core';

function Resume() {
  return (
    <Container id="start"size="sm" style={{ marginTop: 40,  }}>
      <Card shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title ta="center" style={{ color: 'white' }}>Ethan J. Skinner</Title>
        <Text ta="center" style={{ color: 'gray' }}>
          173 Westchester Ave, Thornwood, New York | 914.272.5704 | ethanskinner004@gmail.com
        </Text>
      </Card>

      <Card id="education"shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title order={3} style={{ color: 'white' }}>Education</Title>
        <Divider my="sm" color="gray" />
        <Text style={{ color: 'gray' }}>
          <strong>University of Connecticut, School of Engineering</strong><br />
          Bachelor of Science, Major: Computer Science<br />
          Storrs, CT - June 2026<br />
          GPA: Cumulative 3.1/4.0 | SAT: 1350/1600
        </Text>
        <Text style={{ color: 'gray' }}>
          <strong>Coursework:</strong> Data Structures, Object-Oriented Design, Systems Programming, Cybersecurity, Algorithms and Complexity
        </Text>
        <Divider my="sm" color="gray" />
        <Text style={{ color: 'gray' }}>
          <strong>Westlake High School</strong><br />
          Sept 18 – June 22<br />
          GPA: Cumulative 3.7/4.0<br />
          <strong>Coursework:</strong> AP Biology, Computer Science, Calculus, Statistics, C++ (Fordham University)
        </Text>
      </Card>

      <Card id="experience" shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33', marginBottom: 20 }}>
        <Title order={3} style={{ color: 'white' }}>Leadership & Experience</Title>
        <Divider my="sm" color="gray" />
        <Stack gap="xs">
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>IEE – University of Connecticut</strong><br />
              Sept 23 – February 24
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Offering weekly feedback seminars to students who submit a technology-related project</List.Item>
              <List.Item>Delivered critiques and areas of improvement to project leaders</List.Item>
              <List.Item>Small projects including lights</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>Uconn Dev – University of Connecticut</strong>
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Worked on projects such as websites, apps, and calculations</List.Item>
              <List.Item>Offered designed criticisms to fellow developers</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>Tech Club Secretary – Westlake High School</strong><br />
              Sept 19 – June 22
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Helped raise over $1,000 through campus sales (e.g., T-shirts and student accessories)</List.Item>
              <List.Item>Used proceeds of campus sales to purchase and give away laptops to low-income schools</List.Item>
              <List.Item>Offered free technology user support and troubleshooting to elderly local residents</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>Business Club Member – Westlake High School</strong><br />
              Feb 21 – June 22
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>Helped raise over $1,000 through campus sales (e.g., T-shirts and student accessories)</List.Item>
              <List.Item>Used proceeds of campus sales to purchase and give away laptops to low-income schools</List.Item>
              <List.Item>Offered free technology user support and troubleshooting to elderly local residents</List.Item>
            </List>
          </div>
          <Divider my="sm" color="gray" />
          <div>
            <Text style={{ color: 'gray' }}>
              <strong>Backstage Crewmember – Westlake High School</strong><br />
              Sept 19 – Jan 20
            </Text>
            <List style={{ color: 'gray' }} spacing="xs">
              <List.Item>5 shows: Romeo and Juliet / 50 audience / 15 cast + 20 backstage</List.Item>
              <List.Item>Set up props day before 2-3 hrs</List.Item>
              <List.Item>Helped raise over $1,000 through campus sales (e.g., T-shirts and student accessories)</List.Item>
            </List>
          </div>
        </Stack>
      </Card>

      <Card id="personal"shadow="sm" padding="lg" style={{ backgroundColor: '#2C2E33' }}>
        <Title order={3} style={{ color: 'white' }}>Personal</Title>
        <Divider my="sm" color="gray" />
        <Text style={{ color: 'gray' }}>Skills: Computer languages, Lua, Python, JavaScript, SQL, C++</Text>
        <Text style={{ color: 'gray' }}>Interests: Hobbies, Computers, Troubleshoot Hardware / Software</Text>
      </Card>
    </Container>
  );
}

export default Resume;
